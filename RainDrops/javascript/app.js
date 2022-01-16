$(document).ready(function(){
    var image = document.getElementById("myImage")
        image.onload = function() {
            var engine = new RainyDay({
                image: this 
            });

            //Small Rain Drop
            engine.rain([
                [1, 2, 7000]
            
            ]);

            //Big Rain Drop
            engine.rain([
                [3, 3, 0.88],
                [5, 5, 0.9],
                [6, 2, 1]
            ], 10); //time of rain drop 1000 = 1 second
        }
        image.src = '/image/design-4.jpg';
});