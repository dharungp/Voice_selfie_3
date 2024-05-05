
var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
Webcam.attach('#camera');


function speak(){

    
    var synth = window.speechSynthesis;
    

    setTimeout(function()
    {
        img_id= " first selfie";
        take_snapshot();
        speak_data = "Taking your Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
    },5000);


    setTimeout(function()
    {
        img_id= " second selfie";
        take_snapshot();
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
    },10000);



    setTimeout(function()
    { 
        img_id= " third selfie";
        take_snapshot();
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
    },15000);


}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri)
    {
     
        if(img_id==" first selfie"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src"'+data_uri+'"/>';
          }
        if(img_id==" second selfie"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src"'+data_uri+'"/>';
        
          }
        if(img_id==" thirdselfie"){
                document.getElementById("result3").innerHTML = '<img id="selfie3" src"'+data_uri+'"/>';
        
          }  
    });
}
