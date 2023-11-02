const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const preBtn = document.querySelector('.item-frame-left') ;
const nextBtn = document.querySelector('.item-frame-right') ;
const preBtn1 = document.querySelector('.back') ;
const nextBtn1 = document.querySelector('.next') ;
const slidesSize = slides[0].getBoundingClientRect();
const slidesWidth = slidesSize.width;

function Btn() {

    const firstScreen = document.querySelector('.home');
    firstScreen.style.display = 'none';
    const secondScreen1 = document.querySelector('.carousel_track');
    secondScreen1.style.display = 'none';
    const frame = document.querySelector('.frame');
    frame.style.display = 'none';


    const secondScreen = document.querySelector('.dangky');
    secondScreen.style.display = 'block';

}
function showSecondScreen() {

    const firstScreen = document.querySelector('.home');
    firstScreen.style.display = 'none';

    const secondScreen = document.querySelector('.carousel_track');
    secondScreen.style.display = 'block';
    const frame = document.querySelector('.frame');
    frame.style.display = 'block';

}

const functionShowSlides = (slide, index) => {
    slide.style.left = slidesWidth * index + 'px';
}
slides.forEach(functionShowSlides)

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
}

nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide)
    console.log("next");
})

preBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const preSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, preSlide)
    console.log("prn");
})
nextBtn1.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide)
    console.log("next");
})

preBtn1.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const preSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, preSlide)
    console.log("prn");
})

