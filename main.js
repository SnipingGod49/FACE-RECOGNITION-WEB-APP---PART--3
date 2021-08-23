Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

var camera = document.getElementById("camera");
Webcam.attach('#camera')

function capture_image()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
});
}
console.log(ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WSAeUTvkc/model.json',modelLoaded)
function identify_image()
{
    img = document.getElementById("capture_image")
    classifier.classify(img,gotResult)
}
function gotResult(error,results)
{
    if (error)
    {
        console.error(error)
    }
    else{
        console.log(results) 
        document.getElementById("result_objectName").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}
function modelLoaded()
{
console.log("modelLoaded")
}
