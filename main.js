var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}

     
recognition.onresult = function(event)
{
    console.log(event);

 Content = event.results[0] [0].transcript.toLowerCase();

   document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "selfie"){
        speak()
    }
    
}

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    take_snapshot();
    speak_data= "Taking your next selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    save();
    
    setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        save();
        
    }, 5000);

    setTimeout(function()
    {
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your second selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        save();
    }, 10000);

    setTimeout(function()
    {
        img_id = "selfie3";
        take_snapshot();
        save();
    }, 15000);
    
}
    

    
        

camera= document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : "png",
    png_quality: 90
});

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id =="myselfie1"){
            document.getElementById("result1").innerHTML = '<img id="myselfie1" src="'+data_uri+'"/>';
        }

        if(img_id =="myselfie2"){
            document.getElementById("result2").innerHTML = '<img id="myselfie2" src="'+data_uri+'"/>';
        }

        if(img_id =="myselfie3"){
            document.getElementById("result3").innerHTML = '<img id="myselfie3" src="'+data_uri+'"/>';
        }
        
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

