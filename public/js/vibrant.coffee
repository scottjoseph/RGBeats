dropZone = document.getElementById "drop"

handleFileSelect = (event) ->
    event.stopPropagation()
    event.preventDefault()

    files = event.dataTransfer.files
    f = files[0]
    reader = new FileReader

    progress = (event) ->
        image = new Image(200, 200)
        image.src = event.target.result
        document.getElementById("image").innerHTML = "<img src='#{event.target.result}' />"

        # https://jariz.github.io/vibrant.js/
        vibrant = new Vibrant(image)
        swatches = vibrant.swatches()

        for swatch of swatches
            if swatches.hasOwnProperty(swatch) and swatches[swatch]
                for el in document.querySelectorAll ".color#{swatch}"
                    el.style.backgroundColor = swatches[swatch].getHex()

    parseFile = (theFile) -> progress

    reader.onload = parseFile(f)
    data = reader.readAsDataURL(f)

handleDragOver = (event) ->
    event.stopPropagation()
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"

dropZone.addEventListener "dragover", handleDragOver, false
dropZone.addEventListener "drop", handleFileSelect, false
