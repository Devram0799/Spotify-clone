console.log("welcome to Artist");

let songIndex=0;
let audioElement = new Audio('./images/2.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));


let songs=[
{songName: "Kesariya tera",filepath:"./images/1.mp3", coverPath:"./images/cover4.jpg"},
{songName: "Pyar hota kahi  baar hai ",filepath:"./images/2.mp3", coverPath:"./images/cover2.jpg"},
{songName: "raate lambhiya",filepath:"./images/3.mp3", coverPath:"./images/cover3.jpg"},
{songName: "tera pyar me",filepath:"./images/4.mp3", coverPath:"./images/cover4.jpg"},
{songName: "fir kya chahiye",filepath:"./images/5.mp3", coverPath:"./images/cover5.jpg"},
{songName: "heeriya",filepath:"./images/6.mp3", coverPath:"./images/cover6.jpg"},
{songName: "dil to baacha",filepath:"./images/7.mp3", coverPath:"./images/cover.jpg"},

]

  songItems.forEach((element,i)=>{
	console.log(element,i);
	element.getElementsByTagName("img")[0].src = songs[i].coverPath;

	
	
	
	
	
})

 //handle ply /pause click
masterPlay.addEventListener('click',()=>{
	if (audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		masterPlay.classList.remove('fa-circle-play');
	    masterPlay.classList.add('fa-circle-pause');
		gif.style.opacity =1;
		
	}
	else{
	audioElement.pause();
		masterPlay.classList.remove('fa-circle-pause');
	    masterPlay.classList.add('fa-circle-play');
		gif.style.opacity =0;
}
})
 //listen to event
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    
    // seekbar update
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

	
	

myProgressBar.addEventListener('change',()=>{
	audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
	
	
	})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
       let  songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `./images/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});

document.getElementById('next').addEventListener('click',()=>{
	if (songIndex > 6){
		songIndex =1
	}
	else
	{
		songIndex +=1;
	}
	  audioElement.src = `./images/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
	
document.getElementById('previous').addEventListener('click',()=>{
	if (songIndex <= 0){
		songIndex =1
	}
	else
	{
		songIndex -=1;
	}
	  audioElement.src = `./images/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
	