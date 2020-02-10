// $(document).ready(function() {
//     // Target your .container, .wrapper, .post, etc.
//     $(".video").fitVids();
//   });

// (une fonction anonyme)
// Pour la vidéo en responsive
$(function() {
  $(".video").fitVids();
  // // Pour le menu burger : https://graphemica.com/%E2%98%B0
  // $("<div>&#9776;</div>")
  //   .attr("id", "btBurger")
  //   .css("font-size", "2em")
  //   .css("color", "white")
  //   .css("padding", "10px 0")
  //   .css("cursor", "pointer")
  //   //Pour le rendre clickable en plus de l'avoir stylisé
  //   .click(function() {
  //     $("#mainNav ul").toggle();
  //   })
  //   // .prependTo plutot que .appendTo car on veut charger avant et pas à la fin
  //   .prependTo("#mainNav");
  // // Pour activer et désactiver le menu burger selon qu'on soit en écran mobile ou pas
  // majMenu();
  // $(window).resize(function() {
  //   majMenu();
  // });

  // Avec meanMenu.js : https://github.com/meanthemes/meanMenu/blob/master/README.md

  $("#mainNav").meanmenu({
    meanScreenWidth: 500,
    meanRevealColour: "gold",
    meanMenuClose: "F",
    // meanExpandableChildren: true, // est true par défaut
    
  });
});

// Pour activer et désactiver le menu burger selon qu'on soit en écran mobile ou pas
function majMenu() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    $("#btBurger").show();
    $("#mainNav ul").hide();
  } else {
    $("#btBurger").hide();
    $("#mainNav ul").show();
  }
}
