function startProgress(){

    var images = new Array('images/5.jpg','images/paz.jpg');
    var texts = new Array('טיפז','שטחי מסחר פז סנטר');
    var static_image = document.getElementById('img-reload');
    var static_text = document.getElementById('img-reload-text');
    var image_number = 0;

    setInterval(
        function() {
            static_image.src = images[image_number];
            static_text.innerHTML = texts[image_number];
            image_number++;
            if(image_number >= images.length){
                image_number = 0;
            }
        }
        ,2000
    );

}
  