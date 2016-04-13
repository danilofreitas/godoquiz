(function($) {

  var randomExcuses = [
      "É problema de cache, limpa o cache do seu navegador...",
      "É problema da API!",
      "Isso só acontece no retina...",
      "Foi o Pepe que fez isso ai...",
      "Is this a baby? No, it's a dog",
      "Putz, no angular é diferente, é melhor mudar a API e o layout",
      "Porra Pepe!!!",
      "É melhor a API mandar tudo"
  ];

  function getRandomExcuse() {
    return randomExcuses[Math.round(Math.random() * randomExcuses.length)];
  }

  $.fn.fadeTo = function(target) {
    var e = $(this);
    e.fadeOut(300, "swing", function() {
      e.html(target);
      e.fadeIn(200, "swing");
    })
  };

  $(document).keyup(function(k) {
    if (k.keyCode == 32) {
      $("h1").fadeTo(getRandomExcuse());
      $(".jumper-man img").attr('src', 'assetes/img/jumper-boy.gif')
    }
  });

  $(".tweet").click(function(a) {
    a.preventDefault();

    var b = encodeURIComponent('"' + $("h1").html() + '" - Gere a sua desculpa completamente aleatória no');
    window.open("http://twitter.com/share?url=" + location.href + "&text=" + b + "&related=ferodss&", "twitterwindow", "height=450, width=550, top=" + ($(window).height() / 2 - 225) + ", left=" + $(window).width() / 2 + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
  });

  $("h1").fadeTo(getRandomExcuse());

})(jQuery);
