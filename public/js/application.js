

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
      location.reload();
    });
  });

  $(".rgb-button").on("click", function(){
    event.preventDefault();

    var red = $("#ember241").val()
    var green = $("#ember242").val()
    var blue = $("#ember243").val()
    // debugger
51, 102, 153, 204, 255
    var trackId = ""
    if (red > 204){
      //rock
      trackId = "5VVWgWH8HFLAtM8lbttvn9"
    } else if (red > 153){
      //rap | hip-hop
      trackId = "5dX9fDuiEkcEg12v6JQ4iO"
    } else if (red > 102){
      //pop
      trackId = "455AfCsOhhLPRc68sE01D8"
    } else if (red > 51) {
      //country
      trackId = "1WzAeadSKJhqykZFbJNmQv"
    } else {
      //dance
      trackId = "4jacsL77ZYnpInmTtUBaJW"
    };


    var url = "https://api.spotify.com/v1/tracks/" + trackId
    var request = $.ajax({
      url: url
    });

    request.done(function(song){
      $(".spotify").empty()
      $(".spotify").append("<iframe src=" + song.preview_url + " width=820 height=100></iframe>")
    });
  });

});
