$('input').keypress(function(event){
   if (event.which === 13) {
       var todoText = $(this).val();
       $(this).val("");
       $('ul').append('<li>' + todoText + '<span><i class= "fa fa-trash-alt tr"</i></span>');

       
   }
});

$('ul').on('click', "span" , function(event){
  $(this).parent().fadeOut(500,function(){
     $(this).remove();
  });
  event.stopPropagation();
});



// style cursor
var place = document.getElementsByTagName("p")[0];
place.style.position = "absolute";
place.style.color = "red";
place.style.fontSize = "25px";

window.onmousemove = function(event){
    place.style.left = event.clientX + 'px';
    place.style.top = event.clientY + 'px';
}
    
