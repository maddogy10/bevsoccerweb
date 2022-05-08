var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides')
    var dots = document.getElementsByClassName('dot')
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "block"
    dots(slideIndex - 1).className += "active";
}


// second staff
showSlides1
function plusSlides1(n) {
    showSlides1(slideIndex += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex = n)
}

function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName('mySlides1')
    var dots1 = document.getElementsByClassName('dot1')
    if(n > slides1.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides1.length
    }
    for(i = 0; i < slides1.length; i++) {
        slides1[i].style.display = 'none'
    }
    for(i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace("active", "")
    }
    slides1[slideIndex - 1].style.display = "block"
    dots1(slideIndex - 1).className += "active";
}

//third coach

showSlides2(slideIndex);

function plusSlides2(n) {
    showSlides2(slideIndex += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex = n)
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName('mySlides2')
    var dots2 = document.getElementsByClassName('dot2')
    if(n > slides2.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides2.length
    }
    for(i = 0; i < slides2.length; i++) {
        slides2[i].style.display = 'none'
    }
    for(i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace("active", "")
    }
    slides2[slideIndex - 1].style.display = "block"
    dots2(slideIndex - 1).className += "active";
}

//fourth coach

showSlides3(slideIndex);

function plusSlides3(n) {
    showSlides3(slideIndex += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex = n)
}

function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName('mySlides3')
    var dots3 = document.getElementsByClassName('dot3')
    if(n > slides3.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides3.length
    }
    for(i = 0; i < slides3.length; i++) {
        slides3[i].style.display = 'none'
    }
    for(i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace("active", "")
    }
    slides3[slideIndex - 1].style.display = "block"
    dots3(slideIndex - 1).className += "active";
}

//fifth staff
showSlides4(slideIndex);

function plusSlides4(n) {
    showSlides4(slideIndex += n);
}

function currentSlide4(n) {
    showSlides4(slideIndex = n)
}

function showSlides4(n) {
    var i;
    var slides4 = document.getElementsByClassName('mySlides4')
    var dots4 = document.getElementsByClassName('dot4')
    if(n > slides4.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides4.length
    }
    for(i = 0; i < slides4.length; i++) {
        slides4[i].style.display = 'none'
    }
    for(i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace("active", "")
    }
    slides4[slideIndex - 1].style.display = "block"
    dots4(slideIndex - 1).className += "active";
}

//sixth staff

showSlides5(slideIndex);

function plusSlides5(n) {
    showSlides5(slideIndex += n);
}

function currentSlide5(n) {
    showSlides5(slideIndex = n)
}

function showSlides5(n) {
    var i;
    var slides5 = document.getElementsByClassName('mySlides5')
    var dots5 = document.getElementsByClassName('dot5')
    if(n > slides5.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides5.length
    }
    for(i = 0; i < slides5.length; i++) {
        slides5[i].style.display = 'none'
    }
    for(i = 0; i < dots5.length; i++) {
        dots5[i].className = dots5[i].className.replace("active", "")
    }
    slides5[slideIndex - 1].style.display = "block"
    dots5(slideIndex - 1).className += "active";
}