
/*------------------------------------*\
    #MENUMODAL
\*------------------------------------*/


function toggleModal(){
 $('#menuModal').modal('toggle');
}
function selectToToggleModal(){
 var list = document.querySelectorAll('.modal-body ul li a');
 for (var f = 0; f < list.length; f++){
     list[f] .onclick = toggleModal;
 }
}

window.onload = selectToToggleModal;


/*------------------------------------*\
    #GALLERY
\*------------------------------------*/

     $('.gallery ul li a').click(function() {
         var itemID = $(this).attr('href');
         $('.gallery ul').addClass('gallery--item_open');
         $(itemID).addClass('gallery--item_open');
         return false;
     });
     $('.gallery__close-buttom ').click(function() {
         $('.gallery__port, .gallery ul').removeClass('gallery--item_open');
         return false;
     });

     $('.gallery ul li a').click(function() {
         $('html, body').animate({
             scrollTop: parseInt($('#top').offset().top)
         }, 400);
     });

/*------------------------------------*\
    #WRAPPER HEIGHT
\*------------------------------------*/
    $('#seccion-inicio') .css({'min-height': ($(window).height() + 'px')});

    $(window).resize(function(){
        $('#seccion-inicio') .css({'min-height': ($(window).height() + 'px')});
        //alert('resized');
    });