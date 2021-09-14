let bars = document.querySelector('#bars-icon');
let navi = document.querySelector('.navi');

bars.onclick = () => {
    bars.classList.toggle('fa-times');
    navi.classList.toggle('active');
}