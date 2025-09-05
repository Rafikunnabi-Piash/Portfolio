lucide.createIcons();

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('py-2', window.scrollY > 50);
    header.classList.toggle('py-4', window.scrollY <= 50);
});

const scrollElements = document.querySelectorAll("[data-scroll]");
const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - 50;
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            el.classList.add('visible');
        }
    });
};

scrollElements.forEach(el => el.classList.add(el.dataset.scroll));
window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();

// --- Project Slider Script ---
document.querySelectorAll('.project-card-container').forEach(project => {
    const slider = project.querySelector('.slider-container');
    const images = slider.querySelectorAll('.slider-image');
    const prevBtn = project.querySelector('.slider-btn.prev');
    const nextBtn = project.querySelector('.slider-btn.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    if (prevBtn && nextBtn && images.length > 0) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        });

        // Initialize first image
        showImage(currentIndex);
    }
});
