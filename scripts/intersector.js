const options = {
    root: null,
    rootMargin: '0px',
    threshold: .65
};

const onIntersected = (e, a) => {
    e.forEach(s => {
        if(!s.isIntersecting) return;

        const animatedL = s.target.querySelectorAll('.animated-left');
        animatedL.forEach(animator => {
            animator.classList.add('animation-flyleft')
        });

        const animatedR = s.target.querySelectorAll('.animated-right');
        animatedR.forEach(animator => {
            animator.classList.add('animation-flyright');
        });

        const animatedT = s.target.querySelectorAll('.animated-top');
        animatedT.forEach(animator => {
            animator.classList.add('animation-flytop');
        });
    });
}

const observer = new IntersectionObserver(onIntersected, options);

const sections = document.querySelectorAll('.section');
sections.forEach(s => observer.observe(s));