document.write("<p><a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#codeNo3\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Type code</a></p>");
document.write("<div class=\"collapse\" id=\"codeNo3\"><div class=\"input-group mb-3\"><input type=\"text\" class=\"form-control\" id=\"code3\" placeholder=\"Enter code\" aria-label=\"Enter code\" aria-describedby=\"basic-addon2\"><div class=\"input-group-append\"><button class=\"btn btn-outline-light\" type=\"button\" onclick=\"checkcode3()\">Submit</button></div></div></div>");
document.write("<p><button class=\"btn btn-primary\" id=\"set4\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample4\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Expand</button><div class=\"collapse\" id=\"collapseExample4\"><div class=\"card card-body\"><a class=\"text-info\" href=\"Shakespeare293813.html\" target=\"_blank\">Shakespeare</a><a class=\"text-info\" href=\"129cobol5674.html\" target=\"_blank\">COBOL</a><a class=\"text-info\" href=\"23o65ok987.html\" target=\"_blank\">TAXI</a></div></div></p>");

var a=document.getElementById("set4");
a.disabled=true;

function checkcode3(){
    var x=document.getElementById("code3");
    var y=document.getElementById("set4");

    if(x.value=="admin2"){
        alert("Set 4 Unlocked!");
        y.disabled=false;
        
    }

    else{
        if(y.disabled==false){
            alert("Set already unlocked!");
        }
        else{
            alert("Incorrect code!");
        }
      
    }
}