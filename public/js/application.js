$(document).ready(function(){
    $('#drop').click(function(){
        // console.log('click');
        // $('#fileBox').trigger('click');
    });
    //Remove item
    $('.fileCont span').click(function(){
        $(this).remove();
    });
});

if (window.FileReader) {
    var drop;
    addEventHandler(window, 'load', function () {
        var status = document.getElementById('status');
        drop = document.getElementById('drop');
        var list = document.getElementById('list');

        function cancel(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            return false;
        }

        // Tells the browser that we *can* drop on this target
        addEventHandler(drop, 'dragover', cancel);
        addEventHandler(drop, 'dragenter', cancel);

        addEventHandler(drop, 'drop', function (e) {
            e = e || window.event; // get window.event if e argument missing (in IE)   
            if (e.preventDefault) {
                e.preventDefault();
            } // stops the browser from redirecting off to the image.

            var dt = e.dataTransfer;
            var files = dt.files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();

                //attach event handlers here...

                reader.readAsDataURL(file);
                addEventHandler(reader, 'loadend', function (e, file) {
                    var bin = this.result;
                    $("#song-result").empty();
                    $("#list").empty();
                    $("#color").empty();
                    var fileCont = document.createElement('div');
                    fileCont.className = "fileCont";

                    list.appendChild(fileCont);

                    // var fileNumber = list.getElementsByTagName('img').length + 1;
                    // status.innerHTML = fileNumber < files.length ? 'Loaded 100% of file ' + fileNumber + ' of ' + files.length + '...' : 'Done loading. processed ' + fileNumber + ' files.';

                    var img = document.createElement("img");
                    img.file = file;
                    img.src = bin;
                    img.className = "thumb";
                    fileCont.appendChild(img);

                    var dominantColorBox = document.createElement("div");
                    // dominantColorBox.className = "color-box";
                    dominantColorBox.id = "color-box";
                    $("#color").append(dominantColorBox);


                    var colorThief = new ColorThief();

                    // console.log(colorThief.getColor(img));
                    var color = colorThief.getColor(img);
                    document.getElementById("color-box").style.backgroundColor = "rgb(" + color + ")";

                    var songButton = document.createElement("button");
                    songButton.className = "song-button";
                    songButton.innerHTML = "Songify!";
                    $("#song-result").append(songButton);




                    //========================================
                    $(".song-button").on("click", function(){
    event.preventDefault();

    var red = color[1];
    var green = color[2]
    var blue = color[3]
// 51, 102, 153, 204, 255
    var trackGenre = ""
    var trackId = ""
    // var trackArtist = ""
    // var trackTitle = ""

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
          //
          // trackArtist = "Elsinore"
          // trackTitle = "Chemicals"
         } else if (green < blue) {
          trackId = "0grFc6klR3hxoHLcgCYsF4";
          //
          // trackArtist = "The Black Keys"
          // trackTitle = "Howlin' For You"
         } else {
          trackId = "57bgtoPSgt236HzfBOd8kj";
          //
          // trackArtist = "AC/DC"
          // trackTitle = "Thunderstruck"
         }
          break;
      case "rap":
        if (green > blue){
          trackId = "40bnezAtQkyVSYk5ueQVJG";
          //
          // trackArtist = "YONAS"
          // trackTitle = "Photo"
        } else if (green < blue){
          trackId = "3fyMH1t6UPeR5croea9PrR";
          //
          // trackArtist = "Drake"
          // trackTitle = "Best I Ever Had"
        } else {
          trackId = "2wBCrtJS3E3TimRZ5MElTI";
          //
          // trackArtist = "Jhene Aiko"
          // trackTitle = "The Worst"
        }


        break;
      case "pop":
        if (green > blue){
          trackId = "455AfCsOhhLPRc68sE01D8";
          //
          // trackArtist = "Katy Perry"
          // trackTitle = "TGIF"
        } else if (green < blue){
          trackId = "717TY4sfgKQm4kFbYQIzgo";
          //
          // trackArtist = "Britney Spears"
          // trackTitle = "Toxic"
        } else {
          trackId = "0GO8y8jQk1PkHzS31d699N"
          //
          // trackArtist = "Grouplove"
          // trackTitle = "Tongue Tied"
        }
        break;
      case "country":
        if (green > blue){
          trackId = "5fSPbm5lcwtqwXkeQQswW8"
          //
          // trackArtist = "Eric Church"
          // trackTitle = "Record Year"
        } else if (green < blue){
          trackId = "1WzAeadSKJhqykZFbJNmQv"
          //
          // trackArtist = "Josh Turner"
          // trackTitle = "Your Man"
        } else {
          trackId = "0V4qXGKnZ6mXnWXDpda8d2"
          //
          // trackArtist = "Lauren Alaina"
          // trackTitle = "Next Boyfriend"
        }
        break;
      case "dance":
        if (green > blue){
          trackId = "6BtC99zhdbWXPGgEOXTTvw"
          //
          // trackArtist = "Glass Animals"
          // trackTitle = "Wyrd"
        } else if ( green < blue){
          trackId = "4jacsL77ZYnpInmTtUBaJW"
          //
          // trackArtist = "Junior Senior"
          // trackTitle = "Move Your Feet"
        } else {
          trackId = "5M0DX04ViGG3T1NXiB9EOu"
          //
          // trackArtist = "Slumberjack ft KLP"
          // trackTitle = "The Others(NGHTMRE REMIX)"
        }
    }

    var url = "https://api.spotify.com/v1/tracks/" + trackId
    var request = $.ajax({
      url: url
    });

    request.done(function(song){
      console.log(song);
    var albumArt = song.album.images[1].url;
    var trackArtist = song.artists[0].name
    var trackTitle = song.name
    var preview = song.preview_url
    $(".song-button").remove();
      $("#song-result").append(
        "<div><img src=" + albumArt + "><div>" + trackTitle + " - " + trackArtist + "</div><div><iframe class="+ "song-frame" +" src=" + preview + "></iframe></div>")
    });
  });


                    //========================================

                    // console.log(img.file.name);
                    // var newFile = document.createElement('div');
                    // newFile.innerHTML = file.name;
                    // newFile.className = "fileName";
                    // fileCont.appendChild(newFile);
                    
                    // var fileSize = document.createElement('div');
                    // fileSize.className = "fileSize";
                    // fileSize.innerHTML = Math.round(file.size/1024) + ' KB';
                    // fileCont.appendChild(fileSize);
                    
                    // var progress = document.createElement('div');
                    // progress.className = "progress";
                    // progress.innerHTML = '<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="progress-bar progress-bar-success" role="progressbar" style="width: 100%"></div>';
                    // fileCont.appendChild(progress);
                    
                    // var remove = document.createElement('div');
                    // remove.className = "remove";
                    // remove.innerHTML = '<span class="glyphicon glyphicon-remove"></div>';
                    // list.appendChild(remove);
                    
                    
                }.bindToEventHandler(file));
            }
            return false;
        });
        Function.prototype.bindToEventHandler = function bindToEventHandler() {
            var handler = this;
            var boundParameters = Array.prototype.slice.call(arguments);
            //create closure
            return function (e) {
                e = e || window.event; // get window.event if e argument missing (in IE)   
                boundParameters.unshift(e);
                handler.apply(this, boundParameters);
            }
        };
    });
} else {
    document.getElementById('status').innerHTML = 'Your browser does not support the HTML5 FileReader.';
}


function addEventHandler(obj, evt, handler) {
    if (obj.addEventListener) {
        // W3C method
        obj.addEventListener(evt, handler, false);
    } else if (obj.attachEvent) {
        // IE method.
        obj.attachEvent('on' + evt, handler);
    } else {
        // Old school method.
        obj['on' + evt] = handler;
    }
}


//Not plugged yet
// var bar = $('.progress-bar');
// $(function(){
//   $(bar).each(function(){
//     bar_width = $(this).attr('aria-valuenow');
//     $(this).width(bar_width + '%');
//   });
// });

