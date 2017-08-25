var nbtr = 10; //nb de tr
var nbtd = 10; //nb de td
$(document).ready(function(){ //lorsque la page est chargé
//Création tableau nbtr*nbtd
//tab est une variable qui "pointera" sur le tableau html pour le manipuler avec jQuery
tab = $('<table id="board"/>', { //objet pour les attributs
css : { //attribut css
border: ' solid 1px transparent'
}
});
//on créé les tr
for(i=0;i<nbtr;i++){
//chaque tr doit être ajouté au tableau (variable tab)
tr = $('<tr />').appendTo(tab); //tr -> variable
//et pour chaque tr on créé les td
for(j=0;j<nbtd;j++){
//chaque td doit être ajouté au tr (variable tr)
td = $('<td />').appendTo(tr);
}
}
//on peut ajouter les tableau html à body...
tab.appendTo('section');
//mise en for css
$('td').css('background-color','#fdeecf');
$('tr:even td:even, tr:odd td:odd').css('background-color','#6e412e');
$('tr:even td:even, tr:odd td:odd').attr('class','sombre');

for (i=1;i<5;i++){
$('tr:even:nth-child('+i+') td:even, tr:odd:nth-child('+i+') td:odd').append("<img class='noir'  src='img/noir.png'>");    
}
for (i=7;i<11;i++){
$('tr:even:nth-child('+i+') td:even, tr:odd:nth-child('+i+') td:odd').append("<img class='bois'  src='img/bois.png'>");    
}
$( function() {
  $('tr:even td:even, tr:odd td:odd').click( function() {
    $(this).css('background-color', 'green');
  } );
});


$( function(){
$( 'tr:even td:even, tr:odd td:odd').dblclick(function() {
  $(this).css( 'background-color','#6e412e' );
  });

});

$(function(){

   $('.noir,.bois').draggable({
        revert : 'invalid',
       cursor : 'move' 
   
});
  
$(".sombre").droppable({
    accept:'.bois,.noir',
});
});

$('.noir,.bois').draggable({
    snap : '.sombre'
});
});
$(function(){
  $("#rotate").click(function(){
    $("section").toggleClass("spinEffect");
  });
});
$(function(){
  $("#rotate1").click(function(){
    $("section").toggleClass("spinEffect");
  });
});

