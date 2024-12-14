

$('.material-image-items').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
        // {
        //     breakpoint: 1025,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 1,
        //     }
        // },
    ]
});

$('.videos-content').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    // variableWidth: true,
    responsive: [
        {
            breakpoint: 1001,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
    ]
});