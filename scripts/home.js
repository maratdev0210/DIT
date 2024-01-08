let closeButton = document.querySelector('.closeButton');
let cookiePopup = document.querySelector('.cookie');
let videoSection = document.querySelector('.video');
let video = document.querySelector('.video img');
let largeVideo = '../assets/video1500.svg';
let mediumVideo = '../assets/video1300.svg';
let newVideo = document.createElement('img');
let closeCookie = document.querySelector('.close');
let closeDirection = document.querySelector('.directions .close');

closeButton.addEventListener('click', (event) => {
    videoSection.removeChild(cookiePopup);
    videoSection.removeChild(closeCookie);
});

window.addEventListener('click', (event) => {
    if (event.target.classList[0] == 'arrowUp') {
        window.scroll(0, 0);
    }
});



let road = document.querySelector('.road');

road.addEventListener('click', (event) => {
    console.log('yes');
    if (event.target.classList[0] == 'buildRoute') {
        let directions = document.querySelector('.directions');
        directions.style.display = 'inline-block';
        console.log('yes');
    }
});

closeDirection.addEventListener('click', () => {
    let directions = document.querySelector('.directions');
    directions.style.display = 'none';
})