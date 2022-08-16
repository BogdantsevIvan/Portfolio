let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
    // window.onload = animOnScroll();

    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            let animItem = animItems[i];
            let animItemHight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHight / animStart + 200;

            if (animItemHight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart + 200;
            }

            if ((window.pageYOffset > (animItemOffset - animItemPoint)) && (window.pageYOffset < (animItemOffset + animItemHight))) {
                animItem.classList.add('active');

            } else if (!animItem.classList.contains('anim-no-hide')) {
                animItem.classList.remove('active');
            }
        }
    }
    function offset(el) {   // Функция определения расстояния при пролистывании
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}