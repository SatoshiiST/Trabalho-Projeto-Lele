let darkmode = document.getElementsById('#Darkmode');

    darkmodearkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon'), ('bx-sun');
        document.body.classList.add('color');
    }
    else{
        darkmode.classList.replace('bx-sun'), ('bx-moon');
        document.body.classList.remove('color');
    }
}