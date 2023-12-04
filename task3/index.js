function convertTemp(){
    let iT=parseFloat(document.getElementById("num").value);
    let unit=document.getElementById("unit").value;
    let cT;
    if(unit =='Celsius'){
        //Convert to Fahrenheit

        cT=(iT*9/5)+32;
        document.getElementById("res").textContent=`${iT} degress Celsius=${cT} degrees fed`;
    }
   else if(unit =='Fahrenheit'){
        //Convert to celsius

        cT=(iT-32)*5/9;
        document.getElementById("res").textContent=`${iT} degress Celsius=${cT} degrees fed`;
    }
    else{
        document.getElementById("res").textContent=`Please Select a valid unit`;
    }
}