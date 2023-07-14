function changeImage(){
    
   var pic = document.getElementById("bulb");

   if(pic.src.match("ON"))
   {
    console.log("ON");
    pic.src ="bulb OFF.jpg";
   }
   else{
    console.log("OFF");
    pic.src ="bulb ON.jpg";
   }

}