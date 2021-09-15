// for navi bars
let bars = document.querySelector('#bars-button');
let navi = document.querySelector('.navi');

bars.onclick = () => {
    bars.classList.toggle('fa-times');
    navi.classList.toggle('active');
}

window.onscroll = () =>{
    bars.classList.remove('fa-times');
    navi.classList.remove('active');
}

// for pop up search form
document.querySelector('#search-button').onclick = () => {
    document.querySelector('#search-content').classList.toggle('active');
}

document.querySelector('#close-button').onclick = () => {
    document.querySelector('#search-content').classList.remove('active');
}