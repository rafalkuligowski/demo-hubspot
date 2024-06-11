
const header = {
    init: function () {
        this.hideNav();
        this.scrollToSection();
    },
    hideNav: function() {
        let prevScrollpos = window.scrollY;
        const headerDiv = $(".page-header-product-page")[0];
        const headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

        window.onscroll = function () {
            const currentScrollPos = window.scrollY;

            /* if we're scrolling up, or we haven't passed the header,
               show the header at the top */
            if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
                headerDiv.style.top = "0";
            }
            else {
                /* otherwise we're scrolling down & have passed the header so hide it */
                headerDiv.style.top = "-7.2rem";
            }

            prevScrollpos = currentScrollPos;
        }
    },
    scrollToSection: function() {
        console.log("test");
        $("nav.e-menu").click(function(e) {
            const target = $(e.target).data("target");
            console.log($("."+target));
            $([document.documentElement, document.body]).animate({  
                scrollTop: $("."+target).offset().top
            }, 1);
        });
    }
}