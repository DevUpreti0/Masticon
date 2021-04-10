let btn = document.querySelectorAll('#track #play_pause');
let song = document.querySelectorAll('#music');

let song_index = 0;
let song_status = 0;
let index_no;

btn.forEach((btn,index) => {
  btn.addEventListener('click', function(){

  	if (song_index == 1) {
  		document.querySelector(".active_song").pause();
  		document.querySelector(".active_song").classList.remove("active_song");
  		document.querySelector(".active_btn").innerHTML = "<i class='bx bx-play'></i>";
  		document.querySelector(".active_btn").classList.remove("active_btn");
  	}else{
        song_index = 1;
  	}
  	
  	song[index].classList.add("active_song");
    this.classList.add("active_btn");

  	song[index].currentTime = 0;

  	if (song_status == 0) {
  		song[index].play();
  		song_status = 1;
  		setInterval(update_second, 1000);
  		index_no = index;
  		this.innerHTML = "<i class='bx bx-pause'></i>";
  	}else{
  		song[index].pause();
  		this.innerHTML = "<i class='bx bx-play'></i>";
  		song_status = 0;
  	}

  });
});

/*This function will be execute in Every Second*/
 function update_second(){
	if (song[index_no].ended) {
      btn[index_no].innerHTML = "<i class='bx bx-play'></i>";
      clearInterval(update_second);
    }
 }


/*side menu*/
function menu_action(){
	let side_nav = document.querySelector('.side_menu');
    side_nav.classList.toggle("side_nav_active");
}

/*main menu*/
function open_close_menu(){
	let nav_content = document.querySelector('.nav_content');
    nav_content.classList.toggle("active_top_navbar");
}



// Function execute When the user scrolls the page
window.onscroll = () =>{

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("Bar").style.width = scrolled + "%";
}

