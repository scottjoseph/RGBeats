$(document).ready(function() {

  // $(".register-button").on("click", function(){
  //   event.preventDefault();

  //   var url = $(this).attr("href");

  //   request = $.ajax({
  //     url: url
  //   })

  //   request.done(function(response){
  //     $(".register-button").hide();
  //     $(".login-button").hide();
  //     $(".index-center").prepend(response)
  //   })
  // })

$(".login-link").on("click", function(){
    event.preventDefault();

    var url = $(this).attr("href");

    request = $.ajax({
      url: url
    })

    request.done(function(response){
      $(".register-link").hide();
      $(".login-link").hide();
      $(".nav-form-container").append(response);
    })
  })

  // $(".index-center").on("submit", ".register-form", function(){
  //   event.preventDefault();

  //   var $this = $(".register-form")
  //   var url = $this.attr("action");
  //   var data = $this.serialize();
  //   var method = $this.attr("method");

  //   request = $.ajax({
  //     url: url,
  //     method: method,
  //     data: data
  //   })

  //   request.done(function(response){
  //     console.log(response);
  //   })
  // })



  $(".login-button").on("click", function(){
    event.preventDefault();

    var url = $(this).attr("href")

    request = $.ajax({
      url: url
    })

    request.done(function(response){
      $(".register-button").hide();
      $(".login-button").hide();
      $(".index-center").prepend(response)
    })
  })

  $(".index-center").on("submit", ".login-form", function(){
    event.preventDefault();

  })
});
