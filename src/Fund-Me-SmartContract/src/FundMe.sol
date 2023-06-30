// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import {PriceConverter} from "./PriceConverter.sol";

error FundMe_NotOwner();

contract FundMe {
    using PriceConverter for uint256;

    AggregatorV3Interface private S_PriceFeed;

    mapping(address => uint256) private addressToAmountFunded;
    address[] private funders;

    address private i_owner;

    function getOwner() public view returns (address) {
        return i_owner;
    }

    uint256 public constant MINIMUM_USD = 5 * 10 ** 18;

    constructor(address priceFeed) {
        i_owner = msg.sender;
        S_PriceFeed = AggregatorV3Interface(priceFeed);
    }

    function fund() public payable {
        require(msg.value.getConversionRate(S_PriceFeed) >= MINIMUM_USD, "You need to spend more ETH!");
        addressToAmountFunded[msg.sender] += msg.value;
        funders.push(msg.sender);
    }

    function getVersion() public view returns (uint256) {
        return S_PriceFeed.version();
    }

    modifier onlyOwner() {
        if (msg.sender != i_owner) revert FundMe_NotOwner();
        _;
    }

    function withdraw() public onlyOwner {
        uint funderArrayLength = funders.length;
        for (uint256 funderIndex = 0; funderIndex < funderArrayLength; funderIndex++) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        funders = new address[](0);

        (bool callSuccess,) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Call failed");
    }

    fallback() external payable {
        fund();
    }

    receive() external payable {
        fund();
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getAddressToAmountFunded(address funderAddress) external view returns (uint256) {
        return addressToAmountFunded[funderAddress];
    }

    function getFunder(uint256 index) external view returns (address) {
        return funders[index];
    }
    function getFunderArrayLength() public view  returns (uint) {
        return funders.length;
    }
    function exists() public pure returns (bool) {
        return true;
    }
}
