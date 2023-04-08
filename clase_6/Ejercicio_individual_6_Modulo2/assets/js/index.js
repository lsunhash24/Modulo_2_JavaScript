 $(document).ready(function() {

// estilo al titulo  
$( "h2" ).css({ color: "blue" });

// se abre instancia de fancybox
 $(".fancybox").fancybox();

// formato venta de imagen
 $(".imagen").fancybox({
   fitToView	: false,
   width		: '35%',
   height		:'53%',
   autoSize	: false,
   closeClick	: false,
   openEffect	: 'elastic',
   closeEffect	: 'none'
 });

// formato ventana video y mapa
$(".varios").fancybox({
    maxWidth	: 800,
    maxHeight	: 600,
    fitToView	: false,
    width		: '70%',
    height		: '70%',
    autoSize	: false,
    closeClick	: false,
    openEffect	: 'elastic',
    closeEffect	: 'none'
  });
  

});