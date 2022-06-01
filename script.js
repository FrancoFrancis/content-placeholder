
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt')
const name = document.getElementById('surname');
const date = document.getElementById('date');
const profile_img = document.getElementById('profile_img');


const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated_bg_text');


setTimeout(getData(), 2500);


function getData() {

    header.innerHTML = '<img src="./images/pexels-photo-4069292.jpeg"  alt="main pic">'
    title.innerHTML = 'Hey, there 👋🏾😎'
    excerpt.innerHTML = ' I am a front-end web developer/entrepreneur I love people  music and ideas 🚀'
    profile_img.innerHTML = '<img src="./images/IMG_franc- new.JPG" width="160px" alt="my photo">'
    surname.innerHTML = 'Francis Etham'
    date.innerHTML = '1 july 2022 '


    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));

}

