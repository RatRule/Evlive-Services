function selectedType(){
    var e = document.getElementById("internTypeSelect");
    var selectedValue = e.options[e.selectedIndex].value;
    if(selectedValue=="marketing"){
        document.getElementById("marketingArea").style.display="block";
        document.getElementById("softwareArea").style.display="none"; 
        document.getElementById('internFormSubmit').style.disabled=false;
    }
    else if(selectedValue=="software"){ 
        document.getElementById("softwareArea").style.display="block"; 
        document.getElementById("marketingArea").style.display="none";
        document.getElementById("internFormSubmit").style.disabled=false;
    }
    
}