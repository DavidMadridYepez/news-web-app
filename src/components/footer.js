import React from "react";

function Footer() {
  return (
    <div className='flex items-center flex-col space-y-10 p-3 bg-neutral-800 py-10'>
      <img className='w-20' src="/images/logo-puño2.jpg" alt="" />
      <p className='md:w-1/2 text-center text-neutral-400'> ™ © 2022 Riot Games, Inc. League of Legends and all related logos, characters, names and distinctive linkenesses thereof are exclusive property of Riot Games, All Rights Reserved.</p>
      <div className='flex flex-col items-center md:flex-row md:space-x-3 space-y-3 md:space-y-0'>
        <a className='duration-200 border-2 border-neutral-800 text-white hover:bg-neutral-600  rounded px-3 py-1' href="https://www.riotgames.com/es/privacy-notice-ES?_gl=1*j18noo*_ga*MzQ1NDU0NDcuMTY0MzM4OTU1Nw..*_ga_FXBJE5DEDD*MTY0ODc3MzExNC4yMS4xLjE2NDg3NzgzNDYuNTg." target='blank'>PRIVACY NOTE</a>
        <a className='duration-200 border-2 border-neutral-800 text-white hover:bg-neutral-600  rounded px-3 py-1' href="https://www.riotgames.com/es/terms-of-service-ES?_gl=1*j18noo*_ga*MzQ1NDU0NDcuMTY0MzM4OTU1Nw..*_ga_FXBJE5DEDD*MTY0ODc3MzExNC4yMS4xLjE2NDg3NzgzNDYuNTg." target='blank'>COOKIE PREFERENCES</a>
        <a className='duration-200 border-2 border-neutral-800 text-white hover:bg-neutral-600  rounded px-3 py-1' href="https://euw.leagueoflegends.com/es/legal/cookie-policy?_gl=1*j18noo*_ga*MzQ1NDU0NDcuMTY0MzM4OTU1Nw..*_ga_FXBJE5DEDD*MTY0ODc3MzExNC4yMS4xLjE2NDg3NzgzNDYuNTg." target='blank'>TERMS OF SERVICE</a>
      </div>
      <img className='w-44' src="/images/rate.jpg" alt="" />
      <div className='flex justify-center md:justify-end space-x-3 pt-5 px-10'>
        <img src="./images/instagram.png" alt="" />
        <img src="./images/facebook.png" alt="" />
        <img src="./images/youtube.png" alt="" />
        <img src="./images/twitter.png" alt="" />
      </div>
    </div >
  );
}

export default Footer;