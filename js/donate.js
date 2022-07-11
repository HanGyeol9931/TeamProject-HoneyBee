let mainText = document.querySelector('text12')

window.addEventListener('scroll', function(){
    let value = window.scrollY

    if(value > 400){
        mainText.style.animation = "disappear 1s ease-in-out forwards"
    }
    else{
        mainText.style.animation = 'slide 1s ease-out'
    }
})