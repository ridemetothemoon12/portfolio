$('document').ready(function() {

    let Fullpage = new fullpage(".fullpage", {
        anchors: ["main","about","about_2", "contact"],
        licenseKey: "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        onLeave: function(origin, destination, direction) {
            $(".header .header_wrap ul li a").removeClass("on").eq(destination.index).addClass("on")
            
            if(destination.index == 2) {
                $(".header .header_wrap ul li a").removeClass("on").eq(1).addClass("on")
            }
            if(destination.index == 3) {
                $(".header .header_wrap ul li a").removeClass("on").eq(2).addClass("on")
            }
        }
    })
})