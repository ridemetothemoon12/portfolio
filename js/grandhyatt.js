$('document').ready(function() {

    let arr = ["index.html", "index.html#about", "index.html#contact"];
    // let typearr = ["S-Core Dream. Lorem Ipsum. 18px",
    // "S-Core Dream. Lorem Ipsum. 22px",
    // "S-Core Dream. Lorem Ipsum.  32px"];
    let thisClass = ["one", "two", "three"];

    $('html, body').css("overflow", "hidden");
    
    $('.init').stop().animate({
        height: "0",
        easing: "swing"
    },1300, function() {        
        $('html, body').css("overflow", "visible");
    })

    $('.header img').click(function() {
        $('.content').fadeOut(400);
        setTimeout(() => {
            location.href = 'index.html';
        }, 800);
    })

    $('.header li').click(function() {
        let i = $(this).index();
        console.log(i);
        $('.content').fadeOut(400);
        setTimeout(() => {
            location.href = arr[i];
        }, 800);
    })


    // $('.font').addClass('on');

    let typed1 = new Typed("#typed1", {
        strings: ["Make your dreams come true.","S-Core Dream3. 18px", "에스코어 드림"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 5000,
        loop: true,
        cursorChar: ''
    })
    let typed2 = new Typed("#typed2", {
        strings: ["Make your dreams come true.","S-Core Dream5. 22px", "에스코어 드림"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 5000,
        loop: true,
        cursorChar: ''
    })
    
    let typed3 = new Typed("#typed3", {
        strings: ["Make your dreams come true.","S-Core Dream3. 32px", "에스코어 드림"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 5000,
        loop: true,
        cursorChar: ''
    })
})