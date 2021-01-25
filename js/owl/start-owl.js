$(document).ready(function () {
    // علشان تشغالو بتكتب الكلاس اللى انت عاوزة و بعدين تسيبو يشتغال 
    $('.owl-carousel').owlCarousel({
        loop: true, // علشان التكرار بتاع الكارزار يعنى كل ما يوصال الى النهاية يرجع يشتغال
        smartSpeed: 1000, // سرعة الانتقال 
        autoplay: true, // علشان الكارزار يكون شغال 
        margin: 10, // التباعد بين كل عنصر و الثانى 
        nav: true, // الاسهم اللى تاحت
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    //******************************************//
    $('#logo').owlCarousel({
        loop: true,
        smartSpeed: 5000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

$(document).ready(function () {
    $('#customers').owlCarousel({
        loop: true,
        smartSpeed: 4000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 1
            }
        }
    })
});
