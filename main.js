import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import 'tailwindcss/tailwind.css';
import logowhite from './img/logo-white.png'
import youtube from './img/youtube.png'
import linkedin from './img/linkedin.png'
import instagram from './img/insta.png'

document.querySelector('#app').innerHTML = `
<div class="h-screen w-screen bg-gradient-to-tr from-yellow-300 to-pink-500 flex flex-col">

<div class="w-auto flex justify-center bg-black p-5"> 

    <img src="${logowhite}" alt="" class="w-3/4 md:w-3/5">
</div>

<p class="text-center font-mono m-2 mb-10 md:mb-2 text-lg xs:text-xl sm:text-2xl md:text-3xl xl:text-3xl">↓ No copyright sound ↓</p>
<div class="h-3/5 mx-auto w-3/4 flex flex-col justify-around items-center p-1 gap-1 rounded-xl">

<a a href="https://open.spotify.com/album/0L5IX3SUArnyecopB3rNAd?si=ZMiX1hNGTsGQMDXtAPGsJQ" target="_blank" rel="noopener noreferrer" class="flex justify-center align-middle items-center w-56 sm:w-3/4 h-16 sm:h-1/6 p-0 px-1 rounded-xl border-2 border-black bg-green-600 text-white xs:text-2xl sm:text-2xl font-mono font-semibold hover:bg-green-800 hover:scale-105">Spotify</a>
<a href="https://music.youtube.com/playlist?list=OLAK5uy_nDJQFIpWo9dLNZ-i6-koIA85nSYvbvz5g&feature=share" target="_blank" rel="noopener noreferrer" class="flex justify-center align-middle items-center w-56 sm:w-3/4 h-16 sm:h-1/6 p-0 px-1 rounded-xl border-2 border-black bg-red-600 text-white xs:text-2xl sm:text-2xl font-mono font-semibold hover:bg-red-800 hover:scale-105">Youtube Music</a>
<a href="https://tidal.com/browse/album/250233328"  target="_blank" rel="noopener noreferrer" class="flex justify-center align-middle items-center w-56 sm:w-3/4 h-16 sm:h-1/6 p-0 px-1 rounded-xl border-2 border-black bg-gray-700 text-white xs:text-2xl sm:text-2xl font-mono font-semibold hover:bg-gray-900 hover:scale-105">Tidal</a>


</div>

<div class="flex justify-center gap-5 p-5 ">

<div class="hover:scale-110">
<a href="https://instagram.com/apolomafia" target="_blank" rel="noopener noreferrer" class="rounded-full p-2 "><img src="${instagram}" alt="instagram" class="w-14"></a>
</div>
<div class="hover:scale-110">
<a href="https://youtube.com/@apolomafiamusic" target="_blank" rel="noopener noreferrer" class="rounded-full p-2 "><img src="${youtube}" alt="youtube" class="w-14"></a>
</div >
<div class="hover:scale-110">
<a href="https://github.com/mathysaak" target="_blank" rel="noopener noreferrer" class="rounded-full p-2"><img src="${linkedin}" alt="linkedin" class="w-14"></a>
</div>

</div>
</div>

`

/* document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
 */