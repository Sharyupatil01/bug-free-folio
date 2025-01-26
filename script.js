$(document).ready(function(){
    $(window).scroll(function()
{
    if($(this).scrollTop()>1)
    {
        $(".header-area").addClass("sticky");
    }
    else{
        $(".header-area").removeClass("sticky");
    }
    // Update the Active section in the header 
    updateActiveSection();
});

$(".header ul li a").click(function(e)
{
    e.preventDefault();

    var target=$(this).attr("href");

    if($(target).hasClass("active-section"))
    {
        return;
    }
    if(target=="#home")
    {
        $("html,body").animate(
            {
                scrollTop:0
            },500
        );
    }
    else{
        var offset=$(target).offset().top-40;
        $("html, body").animate(
            {
                scrollTop:offset
            },500
        );
    }
    $(".header ul li a").removeClass("active");
    $(this).addClass("active");
    
});

ScrollReveal({
    distance:"100px",
    duration:2000,
    delay:300
});

ScrollReveal().reveal(".header a, .profile-photo,.about-content,.education",{
    origin:"left"
});
ScrollReveal().reveal(".header ul, .profile-text,.about-skills,.internship",{
    origin:"right"
});
ScrollReveal().reveal(".project-title, .contact-title",{
    origin:"top"
});
ScrollReveal().reveal(".projects, .contact",{
    origin:"bottom"
});





})