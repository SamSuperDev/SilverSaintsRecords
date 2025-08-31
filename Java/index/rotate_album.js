const album = document.querySelector('.album');

function rotateAlbum() {
    let scrollY = window.scrollY;
    let rotateY = scrollY / 5;
    let rotateX = scrollY / 10;
    album.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
}

function handleScroll() {
            // Only rotate if portrait or width > 600px (adjust as needed)
    if (window.innerHeight >= window.innerWidth || window.innerWidth > 900) {
        rotateAlbum();
    } else {
        album.style.transform = 'rotateY(0deg) rotateX(0deg)'; // keep static in landscape small screens
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll); // handles orientation change