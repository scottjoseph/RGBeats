$(document).ready(function(){
var dropZone, handleDragOver, handleFileSelect;
dropZone = document.getElementById("drop");
handleFileSelect = function(event) {
  var data, f, files, parseFile, progress, reader;
  event.stopPropagation();
  event.preventDefault();
  files = event.dataTransfer.files;
  f = files[0];
  reader = new FileReader;
  progress = function(event) {
    var el, image, swatch, swatches, vibrant, _results;
    image = new Image(200, 200);
    image.src = event.target.result;
    document.getElementById("image").innerHTML = "<img src='" + event.target.result + "' />";
    vibrant = new Vibrant(image);
    swatches = vibrant.swatches();
    _results = [];
    for (swatch in swatches) {
      _results.push((function() {
        var _i, _len, _ref, _results2;
        if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
          _ref = document.querySelectorAll(".color" + swatch);
          _results2 = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            el = _ref[_i];
            _results2.push(el.style.backgroundColor = swatches[swatch].getRgb());
          }
          var red = _results2[0][0]
          var green = _results2[0][1]
          var blue = _results2[0][2]
          console.log(red);
          console.log(green);
          console.log(blue);
          // return _results2;
        }
      })());
    }
    return _results;
  };
  parseFile = function(theFile) {
    return progress;
  };
  reader.onload = parseFile(f);
  return data = reader.readAsDataURL(f);
};
handleDragOver = function(event) {
  event.stopPropagation();
  event.preventDefault();
  return event.dataTransfer.dropEffect = "copy";
};
dropZone.addEventListener("dragover", handleDragOver, false);
dropZone.addEventListener("drop", handleFileSelect, false);
});
