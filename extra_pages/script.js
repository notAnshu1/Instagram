function data(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("email").value;
    var c=document.getElementById("phone").value;
    var p=document.getElementById("password").value;

    if(a=="" || b==""|| c=="" || p==""){
        alert("All fields are mandatory!");
        return false;
    }

    if(c.length<10 || c.length>10){
        alert("Number should be 10 digits");
        return false;
    }
    if(p.length<6){
        alert("password should be minimun six digits");
        return false;
    }

    else{
        return true;
    }
}