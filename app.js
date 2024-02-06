

//*intro animation when DOM content loads
const intro = document.querySelector('.intro');
const logo = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {

        logo.forEach((logo, index) => {

            setTimeout(() => {

                logo.classList.add('active');

            }, (index + 1) * 400);

        });

    }, 100);

    setTimeout(() => {

        intro.style.opacity = '0';

    }, 2600);

    setTimeout(() => {

        intro.style.display = 'none';

    }, 3200);

})


//*main heading letters change color uppon hover
const mainHeading = document.querySelector('.mainheading');
const letters = mainHeading.textContent.split('');
mainHeading.innerHTML = '';

letters.forEach(letter => {

    const span = document.createElement('span');
    span.textContent = letter;
    span.style.transition = 'color 0.5s linear';
    span.style.color = 'inherit';
    const originalColor = span.style.color || window.getComputedStyle(span).color;

    span.addEventListener('pointerover', function () {

        this.style.color = '#FF8BA6';
        this.style.cursor = 'default';

    });
    span.addEventListener('pointerleave', function () {

        setTimeout(() => {

            this.style.color = originalColor;

        }, 750);

    });

    mainHeading.appendChild(span);

});


//*infinite image library carousel animation
const copy = document.querySelector('.subslider').cloneNode(true);
document.querySelector('.slider').appendChild(copy);

const carousel = document.querySelector('.slider');

const carouselAnimation = carousel.animate(
    [
        { transform: 'translateX(0) translateY(145%)' },
        { transform: 'translateX(-100%) translateY(145%)' },
    ],
    {
        duration: 50000,
        iterations: Infinity,
    }
);


//*on/off button for a drawer
//could've styled in CSS but chose this way instead
const drawerToggleBtn = document.getElementById('drawerToggle');

drawerToggleBtn.addEventListener('pointerover', function () {

    this.style.backgroundColor = 'var(--accent)';
    this.style.cursor = 'pointer';

});
drawerToggleBtn.addEventListener('pointerleave', function () {

    this.style.backgroundColor = 'transparent';

});
drawerToggleBtn.addEventListener('pointerdown', function () {

    this.style.backgroundColor = 'var(--background)';
    this.style.scale = '0.9';

});
drawerToggleBtn.addEventListener('pointerup', function () {

    this.style.backgroundColor = 'transparent';
    this.style.scale = '1';

});

function toggleDrawer() {

    const sidebar = document.getElementById('drawer');
    const container = document.querySelector('.container');
    const sidebarWidth = sidebar.offsetWidth;

    if (sidebar.style.transform === 'translateX(0em)') {

        sidebar.style.transform = `translateX(-${sidebarWidth}em)`;
        container.style.transform = 'translateX(0px)';
        container.style.filter = 'brightness(1)';

    } else {

        sidebar.style.transform = 'translateX(0em)';
        container.style.transform = `translateX(${sidebarWidth}px)`;
        container.style.filter = 'brightness(0.7)';

    };

};


//*observer for loading images in with animations
const observer = new IntersectionObserver(entries => {

    entries.forEach((entry) => {

        console.log(entry);

        if (entry.isIntersecting) {

            entry.target.classList.remove('hide');
            entry.target.classList.add('show');

        } else {

            entry.target.classList.remove('show');
            entry.target.classList.add('hide');

        }

    })

}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
});

const imageLibrary = document.querySelectorAll('.image-library');

imageLibrary.forEach(library => {
    observer.observe(library);
});

//*rotating social links on hover
const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const twitter = document.getElementById('twitter');

const social = [facebook, instagram, twitter];

social.forEach(link => {

    link.addEventListener('pointerover', function () {

        this.animate(
            [
                { transform: 'rotateY(0deg)' },
                { transform: 'rotateY(180deg)' },
                { transform: 'rotateY(0deg)' }
            ],
            {
                duration: 250
            }
        );

    });

});

