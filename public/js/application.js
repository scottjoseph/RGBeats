$(document).ready(function() {

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

  $(".nav-form-container").on("submit", ".register-form", function(){
    event.preventDefault();

    var url = $(this).attr('action');
    var data = $(this).serialize();

    var request = $.ajax({
      url: url,
      data: data,
      method: "POST"
    });

    request.done(function(response){
      window.location = '/'
    });
  });

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


  $(".nav-form-container").on("submit", ".login-form", function(){
    event.preventDefault();

    var url = $(this).attr('action');
    var data = $(this).serialize();

    var request = $.ajax({
      url: url,
      data: data,
      method: "POST"
    });

    request.fail(function(jqxhr, status, errorThrown){
      $(".errors").replaceWith(jqxhr.responseText);
    });

    request.done(function(response){
      // window.location = '/'
      location.reload();
    });
  });

});
