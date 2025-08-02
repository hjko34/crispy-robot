import { frenchlyrics, translatedlyrics, songname } from './indila-lovesong.js';

document.getElementById("songname").innerText = songname;
document.getElementById("french-lyrics").innerHTML = frenchlyrics.replace(/\n/g, "<br>");
document.getElementById("english-lyrics").innerHTML = translatedlyrics.replace(/\n/g, "<br>");
