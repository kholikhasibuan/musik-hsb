const music = new Audio('audio/2.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `On My way<div class="subtitle">Alan Walker</div>`,
                   poster: "img/alan walker.jpeg"
    },
    {
        id: 2,
        songName: `Paradise<br><div class="subtitle">coldplay</div>`,
        poster: "img2/2.jpeg"
    },
    {
        id: 3,
        songName: `perfect<br><div class="subtitle">Ed sherran</div>`,
        poster: "img/ED SHEERAN-2.jpg"
    },
    {
        id: 4,
        songName: `love yourself<br><div class="subtitle">Justin Bieber</div>`,
        poster: "img2/love yourself.jpeg"
    },
    {
        id: 5,
        songName: `Taki Taki<br><div class="subtitle">Dj snake</div>`,
        poster: "img2/Taki-Taki.jpeg"
    },
    {
        id: 6,
        songName: `see you again<br><div class="subtitle">wiz khalifa</div>`,
        poster: "img/wiz-khalifa.jpeg"
    },
    {
        id: 7,
        songName: `Somewhere only we know<br><div class="subtitle">Keane</div>`,
        poster: "img2/somwhere only we Know.jpeg"
    },
    {
        id: 8,
        songName: `one more night<br><div class="subtitle">Marron 5</div>`,
        poster: "img2/one-more-night.jpeg"
    },
    {
        id: 9,
        songName: `night changes<br><div class="subtitle">One direction</div>`,
        poster: "img2/Night-changes.jpeg"
    },
    {
        id: 10,
        songName: `gangsta paradise<br><div class="subtitle">coolio</div>`,
        poster: "img/coolio.jpeg"
    },
    {
        id: 11,
        songName: `chandelier<br><div class="subtitle">sia</div>`,
        poster: "img2/sia.jpeg"
    },

    {
        id: 12,
        songName: `janji setia<br><div class="subtitle">tiara andini</div>`,
        poster: "img2/12.jpeg"
    },
    {
        id: 13,
        songName: `jar of hearts<br><div class="subtitle">Christina perri</div>`,
        poster: "img2/13.jpeg"
    },
    {
        id: 14,
        songName: `7 years<br><div class="subtitle">lukas graham</div>`,
        poster: "img2/14.jpeg"
    },
    {
        id: 15,
        songName: `Bento<br><div class="subtitle">SWAM</div>`,
        poster: "img2/15.jpeg"
    },
    {
        id: 16,
        songName: `Dark Horse<br><div class="subtitle">Katty-Parry ft juicy</div>`,
        poster: "img2/16.jpeg"
    },
    {

        id: 17,
        songName: `thats what's i like<br><div class="subtitle">Brnuo mars</div>`,
        poster: "img2/17.jpeg"
    },
    {
        id: 18,
        songName: `to the bone<br><div class="subtitle">Pamungkas</div>`,
        poster: "img2/18.jpeg"
    },
    {
        id: 19,
        songName: `Somebody's pleasure<br><div class="subtitle">Aziz mahendra</div>`,
        poster: "img2/19.jpeg"
    },
    {
        id: 20,
        songName: `takkan hilang<br><div class="subtitle">Budi doremi</div>`,
        poster: "img2/20.jpeg"
    },
   
]
   
    


Array.from(document.getElementsByClassName('songitem')).forEach((element, i) => {
    if (songs[i]) {
        element.getElementsByTagName('img')[0].src = songs[i].poster;
        element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    }
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove("bi-play-fill", "b1");
        masterPlay.classList.add("bi-pause-fill");
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add("bi-play-fill", "b1");
        masterPlay.classList.remove("bi-pause-fill");
    }
});

const makeAllplays= () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{ el.style.background = "rgba(105, 105, 170, 0.1);"
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')
    
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
         el.style.background = "rgba(105, 105, 105, .0);"
    })
}

let index = 0;
 let poster_master_play = document.getElementById('poster_master_play');
 let title = document.getElementById('title');

 Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
   e.addEventListener('click', (el) => {
    index =el.target.id;
    // console.log(index)
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();      
    masterPlay.classList.remove("bi-play-fill", "b1");
    masterPlay.classList.add("bi-pause-fill");
    
    let songsTitles = songs.filter((els) =>{
        return els.id == index;
    });
    songsTitles.forEach(elss =>{
    let { songName,poster } = elss;
    title.innerHTML = songName;
    poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index -1].style.background =// 'rgba(105, 105, 170, 0.1)';// Perbaikan nilai background tanpa titik koma
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    
    });
 })


 let currentStart = document.getElementById('currentStart');
 let currentEnd   = document.getElementById('currentEnd');
 let seek   = document.getElementById('seek');
 let bar2   = document.getElementById('bar2');
 let dot   = document.getElementsByClassName('dot')[0];
 
 
//  let seek   = document.getElementById('seek');
//  let seek   = document.getElementById('seek');

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60)
    let sec1 = Math.floor(music_dur % 60)

    // console.log(min1)
    if(sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)
    if(sec2 < 10) {
        sec2 = `0${sec2}`;
    }

     currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('input', () => {
    music.currentTime = (Number(seek.value) / 100) * music.duration;

});




let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
    
});




let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;

    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();      
    masterPlay.classList.remove("bi-play-fill", "b1");
    masterPlay.classList.add("bi-pause-fill");
    
    let songsTitles = songs.filter((els) =>{
        return els.id == index;
    });
    songsTitles.forEach(elss =>{
    let { songName,poster } = elss;
    title.innerHTML = songName;
    poster_master_play.src = poster;
    });

    makeAllBackground();
     Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = 'rgba(105, 105, 170, 0.1)';
    makeAllplays();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    
})


next.addEventListener('click', ()=>{
    index ++;
    if (index >Array.from(document.getElementsByClassName('songitem')).length){
        index = 1;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();      
    masterPlay.classList.remove("bi-play-fill", "b1");
    masterPlay.classList.add("bi-pause-fill");
    
    let songsTitles = songs.filter((els) =>{
        return els.id == index;
    });
    songsTitles.forEach(elss =>{
    let { songName,poster } = elss;
    title.innerHTML = songName;
    poster_master_play.src = poster;
    });

    makeAllBackground();
     Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgba(105, 105, 170, 0.1)";
    makeAllplays();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});

















