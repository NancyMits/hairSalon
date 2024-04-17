let video = document.getElementById("video");
let play = document.getElementsById("play");

let video2 = document.getElementById("video2");

// function Play() {
//     if (video.hasAttribute("controls")) {
//         video.removeAttribute("controls");
//         play.style.visibility = "visible";
//     } else {
//         play.style.visibility = "hidden";
//         video.setAttribute("controls");
//     }
// }


// function togglePlay() {
//     if ((!video.paused) && (video.hasAttribute("controls"))) {
//         play.style.visibility = "hidden";
//         video.setAttribute("controls");
//     } else {
//         play.style.visibility = "hidden";
//         video.setAttribute("controls");
//     }
// }

video2.style.border = "1px solid red";

video2.addEventListener('play', function() {
    video2.setAttribute("controls"); // Show controls
    
  });
  
  video2.addEventListener('pause', function() {
    video.removeAttribute("controls"); // Hide controls
  });

  alert("hello world");
