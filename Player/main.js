let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  
    {
    name: "Jhoota",
    artist: "Emiway Bantai X Celina Sharma",
    image: "https://cdn.discordapp.com/attachments/990126542652841984/992455859605082182/download.jpg",
    path: "https://cdn.discordapp.com/attachments/990126542652841984/992455859030466600/Jhoota_-_Emiway_Bantai.mp3"
   },
  
  {
    name: "Tibbeyan Da Putt",
    artist: "Sidhu Moose Wala (RIP)",
    image: "https://a10.gaanacdn.com/images/albums/75/3077675/crop_480x480_1584426072_3077675.jpg",
    path: "https://cdn.discordapp.com/attachments/990126542652841984/991620421109678180/Tibbeyan_Da_Putt_-_Sidhu_Moose_Wala.mp3"
   },
  
  {
    name: "295",
    artist: "Sidhu Moose Wala (RIP)",
    image: "https://www.pagalworld.pw/GpE34Kg9Gq/113543/145671-295-sidhu-moose-wala-mp3-song-300.jpg",
    path: "https://pwdown.com/113543/295%20-%20Sidhu%20Moose%20Wala.mp3"
   },
  {
    name: "Beast Mode",
    artist: "RAW-BEAST",
    image: "https://cdn.discordapp.com/attachments/933567614310027336/978588558120062976/thumb_fan_girl_tnvfc_1624323493238649-8196203483.jpg",
    path: "https://lyricszen.com/wp-content/uploads/2022/04/beast-mode-mp3-song-download.mp3"
   },
  {
    name: "Halamithi Habibo",
    artist: "RAW-BEAST",
    image: "https://m.media-amazon.com/images/I/51nWOcOjxjL._UXNaN_FMjpg_QL85_.jpg",
    path: "https://pwdown.com/113627/Halamithi%20Habibo%20Hindi%20-%20Beast.mp3"
   },
   {
    name: "SULTHAN",
    artist: "KGF CHAPTER 2",
    image: "https://cdn.discordapp.com/attachments/933567614310027336/978170676986912798/OIP.jpg",
    path: "https://pagalbhai.com/music/files/Sulthan%20128%20Kbps.mp3"
  },
  {
    name: "VOODOO",
    artist: "BADSHAH",
    image: "https://m.media-amazon.com/images/I/618qi7vjceL._UXNaN_FMjpg_QL85_.jpg",
    path: "https://pagalbhai.com/music/files/Voodoo%20128%20Kbps.mp3"
  },
   
  {
    name: "TOOFAN",
    artist: "KGF CHAPTER 2",
    image: "https://cdn.discordapp.com/attachments/933567614310027336/978169868010545172/Toofan-Lyrical-Hindi-KGF-Chapter-2-2022-Video-Song-1080p-HDRip-Download.jpg",
    path: "https://pagalbhai.com/music/files/Toofan%20128%20Kbps.mp3"
  },
  {
    name: "Mehabooba",
    artist: "KGF CHAPTER 2",
    image: "https://cdn.discordapp.com/attachments/933567614310027336/978166651461701642/Mehabooba-Malayalam-KGF-Chapter-2-mp3-image.jpg",
    path: "https://pagalbhai.com/music/files/Mehabooba%20128%20Kbps.mp3"
  },
  {
    name: "Choco",
    artist: "Emiway Bantai",
    image: "https://cdn.discordapp.com/attachments/933567614310027336/976385525957140490/Screenshot_2022-05-18_125659.png",
    path: "https://cdn.discordapp.com/attachments/933567614310027336/976386001184391168/Choco_-_Emiway_Bantai.mp3"
  },
  {
    name: "Libaas",
    artist: "KAKA",
    image: "https://www.lyricsia.com/resources/images/Libaas-300-2020.jpg",
    path: "https://cdn.discordapp.com/attachments/933567614310027336/944416957401268224/Kale_Je_Libaas_Di_-_Kaka.mp3"
  },
  {
    name: "Street Talk",
    artist: "Emiway Bantai",
    image: "https://cdn.discordapp.com/attachments/782481491187728414/923810415794876426/street-talk-lyrics-emiway-bantai.jpg",
    path: "https://cdn.discordapp.com/attachments/933567614310027336/944416177231388682/Street_Talk_-_Emiway_Bantai_320-.mp3"
  },
  {
    name: "Awaara Hoon (REMIX)",
    artist: "BY-MASTICON",
    image: "https://cdn.discordapp.com/attachments/897754580035719219/944418096020594748/MastiCon_Icon.png",
    path: "https://cdn.discordapp.com/attachments/933567614310027336/944418341756493854/Awara_Hoon_Remix.mp3",
  },
  {
    name: "Excuses",
    artist: "AP DHILLON & Gurinder Gill",
    image: "https://cdn.discordapp.com/attachments/933567614310027336/947071397849612368/1164313.jpg",
    path: "https://cdn.discordapp.com/attachments/933567614310027336/947071744609505280/Kehndi_Hundi_Si.mp3",
  },
  {
    name: "Kaha Par Hu",
    artist: "Emiway Bantai",
    image: "https://cdn.discordapp.com/attachments/933567614310027336/947073244173852792/Screenshot_2022-02-23_183323.png",
    path: "https://cdn.discordapp.com/attachments/933567614310027336/947073347320176660/Kaha_Par_Hu.mp3",
  },
   {
    name: "Chusamba",
    artist: "Emiway Bantai",
    image: "https://cdn.discordapp.com/attachments/933567614310027336/959847964824723519/Screenshot_2022-04-02_s.png",
    path: "https://cdn.discordapp.com/attachments/933567614310027336/959847548749754378/Emiway_-_Chusamba.mp3",
  },
  
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


