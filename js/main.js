/* header */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $("header").css("backgroundColor", "#000000e6")
        } else {
            $("header").css("backgroundColor", "transparent");
        }
    })
})

/* top-btn scroll */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    });

    $("#top-btn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
        return false;
    });
});


/* service */

// myme
var modal = {
    open: function () {
        $('.myme-popup').fadeIn();
    },
    close: function () {
        $('.myme-popup').fadeOut();
    }
};

for (var i = 0; i < modal.length; i++) {
    modal[i].querySelector('.popup-btn').addEventListener('click', function (e) {
        e.preventDefault();
    });
}
$(document).on('click', '.popup-style', function () {
    window.history.back();
}).on('click', '.image-grid__item', function () {
    window.history.pushState({}, 'modal', '/modal');
    modal.open();
});
window.onpopstate = history.onpushstate = function (e) {
    if (window.location.href.split('/').pop().indexOf('modal') === -1) { // 마지막 segment가 cards라면 모달이 아닌 리스트인 상태이어야한다.
        modal.close(); // 현재의 모달을 닫는다.
    }
}

// // myspace
// $(document).ready(function () {
//     $(".pos-2").click(function () {
//         $(".myspace-popup").fadeIn()
//     });
// });
// $(document).ready(function () {
//     $(".popup-btn").click(function () {
//         $(".myspace-popup").fadeOut()
//     });
// })

// // gallery
// $(document).ready(function () {
//     $(".pos-4").click(function () {
//         $(".gallery-popup").fadeIn()
//     });
// });
// $(document).ready(function () {
//     $(".popup-btn").click(function () {
//         $(".gallery-popup").fadeOut()
//     });
// })

// world
// $(document).ready(function () {
//     $(".pos-5").click(function () {
//         $(".world-popup").fadeIn()
//     });
// });
// $(document).ready(function () {
//     $(".popup-btn").click(function () {
//         $(".world-popup").fadeOut()
//     });
// })

// // healing
// $(document).ready(function () {
//     $(".pos-3").click(function () {
//         $(".healing-popup").fadeIn()
//     });
// });
// $(document).ready(function () {
//     $(".popup-btn").click(function () {
//         $(".healing-popup").fadeOut()
//     });
// })

// // nft-market
// $(document).ready(function () {
//     $(".pos-6").click(function () {
//         $(".nft-popup").fadeIn()
//     });
// });
// $(document).ready(function () {
//     $(".popup-btn").click(function () {
//         $(".nft-popup").fadeOut()
//     });
// })



/* healing PC */
function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll(".healing-slide");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
    }
}

slidesPlugin();


/* section4 business */
// archiving
$(document).ready(function () {
    $("#archiving").click(function () {
        $(".archiving-accordion").fadeIn()
    });
});
$(document).ready(function () {
    $(".archiving-btn").click(function () {
        $(".archiving-accordion").fadeOut()
    });
});

// artfair
$(document).ready(function () {
    $("#artfair").click(function () {
        $(".artfair-accordion").fadeIn()
    });
});
$(document).ready(function () {
    $(".artfair-btn").click(function () {
        $(".artfair-accordion").fadeOut()
    });
});

// in-jeju
$(document).ready(function () {
    $("#in-jeju").click(function () {
        $(".jeju-accordion").fadeIn()
    });
});
$(document).ready(function () {
    $(".jeju-btn").click(function () {
        $(".jeju-accordion").fadeOut()
    });
});