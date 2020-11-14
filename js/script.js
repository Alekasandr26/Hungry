$(function(){
    $('.navbar-toggler').on('click',function(){
        $('.fa-bars , .fa-times').toggleClass('d-none');
    })

     // drobdown menu
     $('.navbar-nav > li').hover(function(){
        $(this).find('ul.child-1').slideDown()

    }, function(){
        $(this).find('ul.child-1').slideUp()
    });
    $('ul.child-1 > li').hover(function(){
        $(this).find('ul.child-2').slideDown()
        
    }, function(){
        $(this).find('ul.child-2').slideUp()
    });
    
    // our-menu , our-staff
    $('.our-menu,.show-icons, .gallery, .show-link').hover(function(){
        $(this).find('div').removeClass('opacity-0');

    }, function(){
        $(this).find('div').addClass('opacity-0');
    });


    if($('.scrollTop').length){
        // scroll animation
        $('.navbar-nav li a').on('click',function(){
            $('.navbar-nav li a').removeClass('active-item');
            $(this).addClass('active-item');
            let selector2 = $(this).attr('href');
            let h = $(selector2);
            $('html, body').animate({
            scrollTop: h.offset().top 
            }, 400);
        })
        
        $(window).on('scroll',function(){
            
            $('.nav-link').each(function(){
                let selector = $(this).attr('href');
                let section = $(selector);
                let windowTop = $(window).scrollTop();
                let sectionTop = section.offset().top;
                if(windowTop > sectionTop-95){
                    $('.navbar-nav li a').removeClass('active-item').filter(this).addClass('active-item');
                };
        
            });
        })

        // scroll TOp
        $(".scrollTop").hide();
        if ($(window).scrollTop()>=250) $(".scrollTop").fadeIn("slow")
        $(window).scroll(function(){
        if ($(window).scrollTop()<=250) $(".scrollTop").fadeOut("slow")
        else $(".scrollTop").fadeIn("slow")
        });

        $(".scrollTop").click(function(){
        $("html, body").animate({scrollTop:0}, "slow")
        })
    }

    // tooltip
    $('[data-toggle="tooltip"]').tooltip()


    // The Gallery - Masonry Layout
      
    if($('.grid').length){
        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
              columnWidth: '.grid-item',
              gutter: 25
            }
        })
    }
    
    // validate
    $.validator.setDefaults({
        highlight: function(element){
            $(element)
            .closest('.form-control')
            .addClass('has-error');
        },
        unhighlight: function(element){
            $(element)
            .closest('.form-control')
            .removeClass('has-error');
        }
    });
    
    $('.form-control-plaintext').validate({
        rules:{
            name:{
               minlength: 3,
               lettersonly: true
            },
            email:{
                required: true,
                email: true
            },
            user_type1:{ 
                required: true
            },
            user_type2:{ 
                required: true
            },
            textarea:{ 
                minlength: 5
            }
        }
    });
})