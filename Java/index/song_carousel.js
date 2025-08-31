const songs = [
    {
    title: "Slow Down",
    artist: "$MoneyP",
    link: "https://soundcloud.com/moneyyp/slow-down?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=ddc4aeecd9fa4adca74fb4edf597f6dd",
    src: "../Music/Slow Down/final.wav",
    img: "../Images/Main/slow down.png"
    },
    {
    title: "He",
    artist: "$MoneyP",
    link: "https://soundcloud.com/moneyyp/hes/s-o9wl6aYrYR0?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=0f0c530b9fc44f9c87fdb3352492335b",
    src: "../Music/He/He.wav",
    img: "../Images/Main/he.png"
    },
    {
    title: "Real",
    artist: "$MoneyP",
    link: "https://soundcloud.com/moneyyp/real?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=bfd87031167e4122a0939410acd1a644",
    src: "../Music/Real/finalforreal.wav",
    img: "../Images/Main/real.png"
    }
];

let currentIndex = 0;
let isPlaying = false;
let carouselInterval;

const albumCover = document.getElementById('albumCover');
const artistName = document.getElementById('artistName');
const songTitle = document.getElementById('songTitle');
const songLink = document.getElementById('songLink');
const playBtn = document.getElementById('playBtn');
const dotsContainer = document.getElementById('dotsContainer');

const audio = new Audio(songs[currentIndex].src);

        // Create dots
songs.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if(index === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
    goToSong(index);
    resetCarousel();
    });
    dotsContainer.appendChild(dot);
});

function updateUI() {
    albumCover.src = songs[currentIndex].img;
    songTitle.textContent = songs[currentIndex].title;
    document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
    });
    artistName.textContent = songs[currentIndex].artist;
    songLink.href = songs[currentIndex].link;
}

function playSong() {
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = '<div class="icon-pause"><div></div><div></div></div>';
    clearInterval(carouselInterval);
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = '<div class="icon-play"></div>';
    startCarousel();
}

playBtn.addEventListener('click', () => {
    if(isPlaying) {
    pauseSong();
    } else {
    playSong();
    }
});

function goToSong(index) {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = '<div class="icon-play"></div>';
    currentIndex = index;
    audio.src = songs[currentIndex].src;
    updateUI();
}

function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    goToSong(currentIndex);
}

function startCarousel() {
    carouselInterval = setInterval(() => {
    if(!isPlaying) {
        nextSong();
    }
    }, 6000); // switch every 4 seconds
}

function resetCarousel() {
    clearInterval(carouselInterval);
    startCarousel();
}

        // Initialize
updateUI();
startCarousel();