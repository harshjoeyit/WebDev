const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    'linear-gradient(to right top, rgb(0, 225, 255), rgb(6, 122, 189))',
    'linear-gradient(to right top,rgb(255, 157, 0), rgb(255, 81, 0))',
    'linear-gradient(to right top, rgb(100, 24, 241), rgb(139, 7, 200))'
];

const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
       
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };

        console.log(bubble.style.color);

        if(entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`)
            bubble.style.setProperty('top', `${directions.top}px`)
            bubble.style.setProperty('width', `${directions.width}px`)
            bubble.style.setProperty('height', `${directions.height}px`)
            bubble.style.background = gradients[gradientIndex]; 
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});