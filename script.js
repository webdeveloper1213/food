/** Javascript for the navigation menu */
const menu = document.querySelector('.menu');
const target = document.querySelectorAll('.target');
menu.addEventListener('click',()=>{
target.forEach((item) => {
    item.classList.toggle('change');
})

})


const icons = document.querySelectorAll('.section1-icons i');
let i = 1;
setInterval(() => {
i++;
    const icon = document.querySelector('.section1-icons .change');
    icon.classList.remove('change');

    if(i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    }else {
        icon.nextElementSibling.classList.add('change');
    }
  

}, 4000);



