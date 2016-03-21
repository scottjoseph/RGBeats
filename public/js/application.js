$(document).ready(function() {

$(".login-link").on("click", function(){
    event.preventDefault();

    var url = $(this).attr("href");

    request = $.ajax({
      url: url
    });

    request.done(function(response){
      $(".register-link").hide();
      $(".login-link").hide();
      $(".nav-form-container").append(response);
    });
  });

$(".register-link").on("click", function(){
    event.preventDefault();

    var url = $(this).attr("href");

    request = $.ajax({
      url: url
    });

    request.done(function(response){
      $(".register-link").hide();
      $(".login-link").hide();
      $(".nav-form-container").prepend(response);
    });
  });

});
