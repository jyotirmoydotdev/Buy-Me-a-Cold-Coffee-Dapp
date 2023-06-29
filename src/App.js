import { ConnectWallet, useAddress, useSDK } from "@thirdweb-dev/react";
import React, { useState } from 'react';

export default function Home() {
  const sdk = useSDK();
  const [eth, seteth] = useState(0.01);
  const userAddress = useAddress();
  console.log(userAddress);

  const handleClick = () => {
    seteth(eth + 0.01)
  };
  const handleClick1 = () => {
    seteth(0)
    seteth(0.01)
  };
  const handleClick3 = () => {
    seteth(0)
    seteth(0.03)
  };
  const handleClick5 = () => {
    seteth(0)
    seteth(0.05)
  };
  let txResult;
  const send = async () => {
    // Transfer 0.8 of the native token (e.g. Ether on Ethereum)
    try {
      await sdk.wallet.transfer("0x4cfed9e1aBA4E876E0f3bc096801792B5Dc940C8", eth);
      txResult=true;
    } catch (error) {
      console.log(txResult)
      txResult=false;
    }
  }
  
  return (
    <main className="main">
      <div className=" h-screen">
        {/* HEADER */}
        <div className="flex flex-row justify-center w-full">
          <div className=" p-2 flex flex-row  sm:w-4/6 w-5/6 justify-between">
            <div className="font-bold text-4xl">
              🥤 
            </div>
            <ConnectWallet theme="light" btnTitle="Connect Wallet"/>
          </div>
        </div>
        <div className="h-10"></div>
          {/* PHOTOT and NAME */}
          <div className="pb-4">
            <div className="flex flex-col w-full justify-center ">
              <div className=" flex flex-row justify-center pb-2">
                <img src="https://pbs.twimg.com/profile_images/1673799170132697088/l9wZczrK_400x400.jpg" alt="My Profile" className="border border-slate-700 w-32 h-32 rounded-full ">
                </img>
              </div>
              <div className="flex flex-row justify-center font-extrabold text-3xl">
                Jyotirmoy Barman
              </div>
            </div>
          </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1  ">
          <div className="grid sm:grid-cols-2 grid-cols-1 px-5 justify-items-end gap-5">
            <div className="flex flex-col gap-3 items-end order-last sm:order-first">
              <div className="border rounded-md border-slate-100 p-5 sm:w-5/6">
                <div className="font-bold text-slate-600">
                Hi, I'm a developer. I create open source projects, write blog posts, and give talks. I use Buy Me a Coffee to receive donations from my fans. This helps me to continue creating and sharing my work with the world. 🥤
                </div>
                <div className="flex flex-row gap-3 p-3 px-0">
                  <div className="">
                    <a href="http://github.com/jyotirmoydotdev" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> </svg></a>
                  </div>
                  <div className="">
                    <a href="http://twitter.com/jyotirmoydotdev" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg></a>
                  </div>
                </div>
              </div>                
            </div>
            <div className="sm:justify-self-start justify-self-center">
              <div className="border rounded-md p-5  w-full sm:w-[400px] border-zinc-100">
                <div className="font-extrabold text-2xl m-3 text-center">
                  Buy <div className="text-slate-500">Jyotirmoy Barman</div> a cold coffee 🧊
                </div>
                <div className="flex flex-row m-3 items-center bg-sky-100 broder border-blue-500 rounded-md p-4 gap-2 text-4xl">
                  <div className="">
                    🥤
                  </div>
                  <div className="text-slate-500 text-base">x</div>
                    <div className="flex flex-row gap-3 text-2xl w-full justify-around">
                      <button id="1" className='bg-white border-sky-500 w-9 h-9 rounded-full font-extrabold text-blue-400 hover:bg-blue-400 hover:text-white' onClick={handleClick1} text="">1</button>
                      <button id="2" className='bg-white border-sky-500 w-9 h-9 rounded-full font-extrabold text-blue-400 hover:bg-blue-400 hover:text-white' onClick={handleClick3} text="">3</button>
                      <button id="3" className='bg-white border-sky-500 w-9 h-9 rounded-full font-extrabold text-blue-400 hover:bg-blue-400 hover:text-white' onClick={handleClick5} text="">5</button>
                      <button className="font-extrabold text-slate-500 w-9 h-9 hover:bg-white hover:rounded-full" onClick={handleClick}> + </button>
                    </div>
                </div>
                <div className="px-3 mt-0 text-center text-white font-bold ">
                    <button className="hover:bg-sky-700 bg-sky-500 rounded-2xl w-full p-3" onClick={send}>Support {eth} ETH</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-14"></div>
      </div>
    </main>
  );
}
