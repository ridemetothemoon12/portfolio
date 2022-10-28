$('document').ready(function() {
    
    let initDelay = 400;
    for(let k = 0; k < $(".main .content_wrap div").length; k++) {
        $(".main .content_wrap div").eq(k).fadeIn(initDelay);
        initDelay += 400;
    }
    
    $(".header_wrap ul li a").click(function() {
        $(".header_wrap ul li a").removeClass("on");
        $(this).addClass("on");
    })

    $(".main .content_wrap div").click(function() {
        let i = $(this).index();
        let delayTimer = 0;
        console.log(i);
        console.log($(".main .content_wrap div").length)

        for(let j = 0; j < $(".main .content_wrap div").length; j++) {
            if(j != i) {
                $(".main .content_wrap div").eq(j).delay(delayTimer).fadeOut();
                delayTimer += 400;
                setTimeout(() => {
                    
                    // $('.init').stop().animate({
                    //     height: "1900",
                    //     easing: "swing"
                    // },1300, function() {        
                    //     $('html, body').css("overflow", "hidden");
                    // })
                }, delayTimer*$(".main .content_wrap div").length-2);
                setTimeout(() => {
                    location.href = 'grandhyatt.html';
                }, delayTimer*$(".main .content_wrap div").length * 1.6);
            }
        }

        setTimeout(() => {
                    
            // $('.init').stop().animate({
            //     height: "1900",
            //     easing: "swing"
            // },1300, function() {        
            //     $('html, body').css("overflow", "hidden");
            // })
            // $(".main .content_wrap").css("position", "static")
                        
                        // $(".main .content_wrap div").eq(i).css("transform", "scale(0)").addClass("on").css("transform", "scale(1)")

                        $(".main .content_wrap div").eq(i).stop().animate({
                            width: "300%",
                            height: "300%",
                            top: "-50%",
                            left: "-50%"
                        })
        }, 2000);

    

                    
    })

    $('.slider, .slider_btn').on("input", function() {
        let pos = this.value;
        console.log(pos);
        $('.fore').css("width", pos + "%");
        $('.slider_btn').css("left", `calc(${pos}% - 18px)`);
    })
})