// JavaScript Document

var n = 0;
var lista = [
  "img/auto1.jpg",
  "img/auto2.jpg",
  "img/auto3.jpg",
  "img/auto4.jpg",
  "img/auto5.jpg"
];
var rotacion;

function carrusel() {
  document.getElementById("imgbaner").src = lista[n];
  n++;
  if (n == lista.length) n = 0;
  rotacion = setTimeout("carrusel()", 1000);
}

function ver(x) {
  //recupero la imagen del article
  var imagen = document
    .getElementsByClassName("artauto")
    [x].getElementsByClassName("car1")[0];

  //ocultando la imagen
  imagen.style.display = "none";
}

function oculta(x) {
  //recupero la imagen del article
  var imagen = document
    .getElementsByClassName("artauto")
    [x].getElementsByClassName("car1")[0];

  //visualiza la imagen
  imagen.style.display = "block";
}

$(document).ready(function() {
  carrusel();
  /*evento hover a .rs, cambio de estilo: opacity*/
  $(".rs").hover(
    function() {
      $(this).css("opacity", "0.3");
    },
    function() {
      $(this).css("opacity", "1");
    }
  );

  $(".amenu").on({
    click: function() {
      alert($(this).text());
    },
    mouseover: function() {
      $(this).css("background", "blue");
    },
    mouseout: function() {
      $(this).css("background", "gray");
    }
  });

  $(".artauto").hover(
    function() {
      $(this)
        .find("img")
        .css("display", "none");
      $(this)
        .find("h3")
        .css("color", "black");
    },
    function() {
      $(this)
        .find("img")
        .css("display", "block");
      $(this)
        .find("h3")
        .css("color", "black");
    }
  );
}); //fin

// rrss
$(".imgsocial").click(function() {
  const valuealt = $(this).attr("alt");
  console.log(valuealt);
  switch (valuealt) {
    case "facebook":
      $(this).attr("href", "https://www.facebook.com");
      window.location.href = $(this).attr("href");
      break;
    case "twitter":
      $(this).attr("href", "https://www.twitter.com");
      window.location.href = $(this).attr("href");
      break;

    default:
      $(this).attr("href", "https://www.instagram.com");
      window.location.href = $(this).attr("href");
      break;
  }
});
