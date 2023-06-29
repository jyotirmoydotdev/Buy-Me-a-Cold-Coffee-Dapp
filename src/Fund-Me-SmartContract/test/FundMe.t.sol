// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Test, console} from "forge-std/Test.sol";
import {FundMe} from "../src/FundMe.sol";
import {DeployFundMe} from "../script/DeployFundMe.s.sol";

contract FundMeTest is Test {
    FundMe fundMe;

    address USER = makeAddr("user");
    uint256 constant SEND_VALUE = 0.1 ether;
    uint256 constant GAS_PRICE = 1;

    function setUp() external {
        DeployFundMe deployFundMe = new DeployFundMe();
        fundMe = deployFundMe.run();
        vm.deal(USER, 10 ether);
    }

    function testMinUsdFunction() public {
        assertEq(fundMe.MINIMUM_USD(), 5e18);
    }

    function testOwner() public {
        assertEq(fundMe.getOwner(), msg.sender); //@audit - need to check if this is the correct way to get the owner
    }

    function testPriceFeedVersionIsAccurate() public {
        //console.log(fundMe.getVersion());
        assertEq(fundMe.getVersion(), 4);
    }

    function testFail_FundFucntion() public {
        fundMe.fund{value: 0}();
    }

    function test_fundArray() public {
        vm.prank(USER);
        fundMe.fund{value: SEND_VALUE}();

        assertEq(fundMe.getFunder(0), USER);
    }

    function test_funderToAmount() public {
        vm.prank(USER);
        fundMe.fund{value: SEND_VALUE}();

        assertEq(fundMe.getAddressToAmountFunded(USER), SEND_VALUE);
    }
    function testAddsFundersToArrayOfFunder()  public {
        vm.prank(USER);
        fundMe.fund{value: SEND_VALUE}();

        address funder=fundMe.getFunder(0);
        assertEq(funder,USER);
    }

    function testFail_withdrawOnlyOwner() public {
        vm.prank(USER);
        fundMe.fund{value: SEND_VALUE}();
        fundMe.withdraw();
    }

    function test_withdrawOnlyOwner() public fund {
        fundMe.fund{value: SEND_VALUE}();

        vm.prank(msg.sender);
        fundMe.withdraw();
    }
    // Todo: TimeStamp 1:26:14

    function test_withdrawOnlyOwnerASingleFunder() public fund {
        uint256 startOwnerBalance = fundMe.getOwner().balance;
        uint256 startContractBalance = address(fundMe).balance;

        vm.prank(fundMe.getOwner());
        fundMe.withdraw();

        uint256 endOwnerBalance = fundMe.getOwner().balance;
        uint256 endContractBalance = address(fundMe).balance;

        assertEq(endContractBalance, 0);
        assertEq(endOwnerBalance, startOwnerBalance + startContractBalance);
    }

    function test_withdrawOnlyOwnerManyFunder() public {
        uint160 acounts = 10;
        uint160 accountIndex =1;
        for (uint160 i = accountIndex; i <= acounts; i++) {
            hoax(address(i), SEND_VALUE);
            fundMe.fund{value: SEND_VALUE}();
        }

        uint startOwnerBalance=fundMe.getOwner().balance;
        uint startContractBalance=address(fundMe).balance;

        uint gasStart = gasleft();
        vm.txGasPrice(GAS_PRICE);
        vm.startPrank(fundMe.getOwner());
        fundMe.withdraw();
        vm.stopPrank();

        uint256 gasEnd = gasleft();
        uint256 gasUsed = (gasStart - gasEnd) * tx.gasprice;
        console.log("Gas used: ", gasUsed);

        uint endOwnerBalance=fundMe.getOwner().balance;
        uint endContractBalance=address(fundMe).balance;

        assertEq(endContractBalance,0);
        assertEq(endOwnerBalance,startOwnerBalance+startContractBalance);
    }

    function Address() public {
        console.log("Sender address: ", msg.sender);
        console.log("Owner  address: ", fundMe.getOwner());
        console.log("test   address: ", address(this));
        console.log("FundMe address: ", address(fundMe));
    }

    modifier fund() {
        vm.prank(USER);
        fundMe.fund{value: SEND_VALUE}();
        _;
    }
}
