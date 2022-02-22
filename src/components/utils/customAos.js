export const customAos = (animation,element,x=100) => {
    const el = document.querySelector(element);
    setInterval(function() {
        setInterval(function() {
            el.classList.add(animation)
        },1000 );
        setInterval(function() {
            el.classList.remove(animation)
        },2000 );
    }, 1000);



///kgkg


}

