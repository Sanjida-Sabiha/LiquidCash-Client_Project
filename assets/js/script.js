/* Header Menu */
  
document.getElementById('mobileMenuButton').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    var menuOpenIcon = document.getElementById('menuOpenIcon');
    var menuCloseIcon = document.getElementById('menuCloseIcon');

    // Toggle mobile menu visibility
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
    }
});

// Auto-close on scroll (with delay)
let scrollTimeout;
window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function () {
        var mobileMenu = document.getElementById('mobileMenu');
        var menuOpenIcon = document.getElementById('menuOpenIcon');
        var menuCloseIcon = document.getElementById('menuCloseIcon');

        // Only close if it's open
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuOpenIcon.classList.remove('hidden');
            menuCloseIcon.classList.add('hidden');
        }
    }, 200); // 300ms delay after scrolling stops
});




//Radio Btn//
    function updateTextColor() {
        const firstLabel = document.getElementById('label1');
        const secondLabel = document.getElementById('label2');
        
        if (document.getElementById('radio1').checked) {
            firstLabel.className = 'text-[#07081E] font-Inter font-medium text-lg leading-8';
            secondLabel.className = 'text-[#7C7C82] font-Inter font-medium text-lg leading-8';
        } else {
            firstLabel.className = 'text-[#7C7C82] font-Inter font-medium text-lg leading-8';
            secondLabel.className = 'text-[#07081E] font-Inter font-medium text-lg leading-8';
        }
    }



    
    document.addEventListener('DOMContentLoaded', function () {
        var swiper = new Swiper('.swiper', {
            slidesPerView: 4,
            spaceBetween: 0,
            loop: true,
            centeredSlides: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            navigation: {
                nextEl: '#slider-previous-unique',
                prevEl: '#slider-next-unique',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
            },
        });
    });
    




  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.unique', {
        slidesPerView: 3.2,
        spaceBetween: 30,
        loop: true,
        Infinity:true,
        centeredSlides: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
            nextEl: '#slider-previouss-unique',
            prevEl: '#slider-nexts-unique',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2.2,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 3.2,
                spaceBetween: 30,
            },
        },
    });
  });