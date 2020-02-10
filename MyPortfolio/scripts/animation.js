class animation{
    constructor(name){
        this.letters = name.querySelectorAll('span');
        this.work = document.querySelector('.home__work');
        this.aboutButton = document.querySelector('.home__button');
        this.active = document.querySelectorAll('.nav__item');
        this.contents = document.querySelectorAll('.content');
        this.navButton = document.querySelector('.button__box');
        this.aboutSupport = document.querySelector('.about-support');
        this.itemAboutButton = document.querySelector('.itemAboutButton');
    }
    animateLetter(){
        this.letters.forEach(letter => {
            if(letter.className === 'letter-1'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                })
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 1000)
            }

            if(letter.className === 'letter-2'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 100)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 1100)
            }
            if(letter.className === 'letter-3'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 200);
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 1200);
            }
            if(letter.className === 'letter-4'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 300)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 1300)
            }
            if(letter.className === 'letter-5'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 400)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 1400)
            }
            if(letter.className === 'letter-6'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 500)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 1500)
            }
            if(letter.className === 'letter-7'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 600)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 1600)
            }
            if(letter.className === 'letter-8'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 700)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 1700)
            }
            if(letter.className === 'letter-9'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 800)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 1800)
            }
            if(letter.className === 'letter-10'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 900)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 1900)
            }
            if(letter.className === 'letter-11'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 1000)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 2000)
            }
            if(letter.className === 'letter-12'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 1100)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 2100)
            }
            if(letter.className === 'letter-13'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 1200)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 2200)
            }
            if(letter.className === 'letter-15'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 1300)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 2300)
            }
            if(letter.className === 'letter-16'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 1400)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 2400)
            }
            if(letter.className === 'letter-17'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 1500)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 2500)
            }
            if(letter.className === 'letter-18'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 1600)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 2600)
            }
            if(letter.className === 'letter-19'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 1700)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 2700)
            }
            if(letter.className === 'letter-20'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 1800)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 2800)
            }
            if(letter.className === 'letter-21'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 1900)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 2900)
            }
            if(letter.className === 'letter-22'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 2000)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 3000)
            }
            if(letter.className === 'letter-23'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 2100)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 3100)
            }
            if(letter.className === 'letter-24'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 2200)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 3200)
            }
            if(letter.className === 'letter-25'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 2300)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 3300)
            }
            if(letter.className === 'letter-26'){
                setTimeout(() => {
                    letter.style.animation = 'rotation .3s';
                    letter.style.opacity = '1';
                    letter.style.visibility = 'visible';
                }, 2400)
                setTimeout(() => {
                    letter.style.color = 'var(--color-white)';
                    letter.style.animation = 'zoomInOut .3s';
                   }, 3400)
            }
            setTimeout(() =>{
                this.work.style.animation = 'left 1s';
                this.work.style.opacity = '1';
            }, 2500)
            setTimeout(() =>{
                this.aboutButton.style.animation = 'leftRotate 1.5s cubic-bezier(0.67, -0.5, 0.06, 3)';
                this.aboutButton.style.opacity = '1';
                this.aboutButton.style.visibility = 'visible';
            }, 2600)

        });
    }
    buttonActive(){
        this.active.forEach(act =>{
            act.addEventListener('click', (e) =>{
                this.active.forEach(act => {
                    act.classList.remove('active');
                })
                e.target.classList.add('active');
                this.updateContent(e);
            });
        });
    }

    updateContent(e){
        let dataTarget = e.target.getAttribute('data-target');
        this.contents.forEach(content => {
            content.classList.remove('active');
                if(content.id === dataTarget){
                    content.classList.add('active');
                }
                if(e.target.textContent === 'Home'){
                    this.aboutSupport.classList.add('active');
                     this.itemAboutButton.classList.add('active');
                }
        })
    }
}
