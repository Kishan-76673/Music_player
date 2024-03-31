// const img = document.querySelector('img');
// const play = document.getElementById("play");
// const music = document.querySelector('audio');
// const artist = document.querySelector('artist');
// const title = document.querySelector('title');
// const back = document.querySelector('backward');
// const next = document.querySelector('forward');

// let isPlaying = false;

// // for play 
// const playMusic = () => {
//   isPlaying = true;
//   music.play();
//   play.classlist.replace("fa-play", "fa-pause");
//   img.classlist.add("anime");
// };

// // for pause 
// const pauseMusic = () => {
//   isPlaying = false;
//   music.pause();
//   play.classlist.replace("fa-pause", "fa-play");
//   img.classlist.remove("anime");
// };

// play.addEventListener('click', () => {
//   if (isPlaying) {
//     pauseMusic();
//   }
//   else {
//     playMusic();
//   }
// });

// const songs = [
//   {
//     name: 'music1',
//     title: 'Kabhi jo baadal barse',
//     artist: 'arjit Singh ',
//   },

//   {
//     name: 'music2',
//     title: 'Kahin se tu aaja',
//     artist: 'Vicky Singh',
//   },

//   {
//     name: 'music3',
//     title: 'Tu safar mera',
//     artist: 'arjit Singh ',
//   },
// ];

// // changing music

// const loadSong = (songs) => {

//   title.textContent = songs.title;
//   artist.textContent = songs.artist;
//   music.src = "music/" + songs.name + ".mp3";
//   img.src = "images/" + songs.name + ".jpg";
// }

// songIndex = 0;

// const nextSong = () => {
//   songIndex = (songIndex + 1) % songs.length;
//   loadSong(songs[songIndex]);
//   playMusic();
// }
// const prevSong = () => {
//   songIndex = (songIndex - 1 + songs.length) % songs.length;
//   loadSong(songs[songIndex]);
//   pauseMusic();
// }
// next.addEventListener('click', nextSong);
// back.addEventListener('click', prevSong);
const img = document.querySelector('img');
const play = document.getElementById("play");
const music = document.querySelector('audio');
const artist = document.querySelector('#artist');
const title = document.querySelector('#title');
const back = document.querySelector('#back');
const next = document.querySelector('#forw');

const songs = [
    {
        name: 'music1',
        title: 'Kabhi jo baadal barse',
        artist: 'arjit Singh ',
    },

    {
        name: 'music2',
        title: 'Kahin se tu aaja',
        artist: 'Vicky Singh',
    },

    {
        name: 'music3',
        title: 'Tu safar mera',
        artist: 'arjit Singh ',
    },
];

let isPlaying = false;

// for play 
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// for pause 
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    console.log("Play clicked");
    if (isPlaying) {
        console.log("Play true");
        pauseMusic();
    }
    else {
        console.log("Play false");
        playMusic();
    }
});

// changing music

const loadSong = (songs) => {

    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "./music/" + songs.name + ".mp3";
    img.src = "./images/" + songs.name + ".jpg";
}

let songIndex = 0;

const nextSong = () => {
    console.log("Playing next song");
    songIndex = (songIndex + 1) % songs.length;
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    pauseMusic();
}
next.addEventListener('click', nextSong);
back.addEventListener('click', prevSong);





