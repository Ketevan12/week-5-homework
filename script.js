console.log('Start ticking...')
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

  

    if(hh > 12){
        session = "PM";

    }
   
     hh = (hh < 10) ? "0" + hh : hh - "12" ;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
    let time = hh + ":" + mm + ":" + ss + " " + session;
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000); 

   
  if ( session = "AM") {
    document.getElementById("egg").style.display = "initial"
    document.getElementById("friedegg").style.display = "none"

  }
  if ( session = "PM") {
    document.getElementById("friedegg").style.display = "initial"
    document.getElementById("egg").style.display = "none"

  }
}

 
 
  currentTime();