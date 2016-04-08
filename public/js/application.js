

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
// 51, 102, 153, 204, 255
    var trackGenre = ""
    var trackId = ""
    if (red > 204){
      trackGenre = "rock"
    } else if (red > 153){
      trackGenre = "rap"
    } else if (red > 102){
      trackGenre = "pop"
    } else if (red > 51) {
      trackGenre = "country"
    } else {
      trackGenre = "dance"
    };

    switch(trackGenre) {
      case "rock":
        if (green > blue){
          trackId = "3otkWCw3GxRkdBkJK18OsJ";
         } else if (green < blue) {
          trackId = "0grFc6klR3hxoHLcgCYsF4";
         } else {
          trackId = "10zlwR7kvVbD9OBkeZWr3L";
         }
          break;
      case "rap":
        if (green > blue){
          trackId = "6B2RPIeLqJyzZpR4334BWk";
        } else if (green < blue){
          trackId = "3fyMH1t6UPeR5croea9PrR";
        } else {
          trackId = "2wBCrtJS3E3TimRZ5MElTI";
        }
        break;
      case "pop":
        if (green > blue){
          trackId = "455AfCsOhhLPRc68sE01D8";
        } else if (green < blue){
          trackId = "0GO8y8jQk1PkHzS31d699N";
        } else {
          trackId = "0GO8y8jQk1PkHzS31d699N"
        }
        break;
      case "country":
        if (green > blue){
          trackId = "5fSPbm5lcwtqwXkeQQswW8"
        } else if (green < blue){
          trackId = "1WzAeadSKJhqykZFbJNmQv"
        } else {
          trackId = "0V4qXGKnZ6mXnWXDpda8d2"
        }
        break;
      case "dance":
        if (green > blue){
          trackId = "6BtC99zhdbWXPGgEOXTTvw"
        } else if ( green < blue){
          trackId = "4jacsL77ZYnpInmTtUBaJW"
        } else {
          trackId = "5M0DX04ViGG3T1NXiB9EOu"
        }

    }


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
