export default function buildSlider() {
const sliderWrapper = document.getElementsByClassName('slider-wrapper')[0];
const sliderNav = document.getElementsByClassName('slider-nav')[0];
const slides = [
    { name: '1 slide', img: '', startActive: true},
    { name: '2 slide', img: ''},
    { name: '3 slide', img: ''},
    { name: '4 slide', img: ''}
];
slides
    .map((slide, i) => {
        let newSlide = document.createElement(`div`);
        let newNav = document.createElement(`a`);
        if(slide.startActive) {
            newSlide.className = 'slider-wrapper__slide active-slide-left';
            newNav.className = 'slider-nav__slide active-nav'; 
        } else {
            newSlide.className = 'slider-wrapper__slide';
            newNav.className = 'slider-nav__slide'; 
        }       
        newSlide.innerHTML = `<span>${slide.name}</span>`;
        newNav.href = '#';
        newNav.onclick = (e) => {
            let activeNav = document.getElementsByClassName('active-nav')[0];
            if(e.target !== activeNav) {
                activeNav.classList.toggle('active-nav');
                e.target.classList.toggle('active-nav');
                let pastActive;
                let futureActive;
                for(let i = 0; i < sliderNav.children.length; i++) {
                    if(sliderNav.children[i] === activeNav) {
                        pastActive = i;             
                    }
                    if(sliderNav.children[i] === e.target) {
                        futureActive = i;
                    }
                }
                if(pastActive < futureActive) {
                    sliderWrapper.children[pastActive].classList.add('hide-slide-left')
                    setTimeout(function(){
                        sliderWrapper.children[pastActive].classList.remove('active-slide-right')
                        sliderWrapper.children[pastActive].classList.remove('active-slide-left') 
                        sliderWrapper.children[pastActive].classList.remove('hide-slide-left')
                    }, 500);
                    sliderWrapper.children[futureActive].classList.add('active-slide-left')
                }
                else if(pastActive > futureActive) {
                    sliderWrapper.children[pastActive].classList.add('hide-slide-right')
                    setTimeout(function(){
                        sliderWrapper.children[pastActive].classList.remove('active-slide-left')
                        sliderWrapper.children[pastActive].classList.remove('active-slide-right') 
                        sliderWrapper.children[pastActive].classList.remove('hide-slide-right')
                    }, 500);
                    sliderWrapper.children[futureActive].classList.add('active-slide-right')
                }
            }  
        } 
        sliderWrapper.appendChild(newSlide);
        sliderNav.appendChild(newNav);
    });
}



