document.write("<p><a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#codeNo2\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Type code</a></p>");
document.write("<div class=\"collapse\" id=\"codeNo2\"><div class=\"input-group mb-3\"><input type=\"text\" class=\"form-control\" id=\"code2\" placeholder=\"Enter code\" aria-label=\"Enter code\" aria-describedby=\"basic-addon2\"><div class=\"input-group-append\"><button class=\"btn btn-outline-light\" type=\"button\" onclick=\"checkcode2()\">Submit</button></div></div></div>");
document.write("<p><button class=\"btn btn-primary\" id=\"set3\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample3\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Expand</button><div class=\"collapse\" id=\"collapseExample3\"><div class=\"card card-body\"><a class=\"text-info\" href=\"whitespace9274.html\" target=\"_blank\">Whitespace</a><a class=\"text-info\" href=\"brain5178.html\" target=\"_blank\">Brainf*ck</a><a class=\"text-info\" href=\"lolcdoe5612.html\" target=\"_blank\">LOLCODE</a></div></div></p>");

var a=document.getElementById("set3");
a.disabled=true;

function checkcode2(){
    var x=document.getElementById("code2");
    var y=document.getElementById("set3");

    if(x.value=="admin1"){
        alert("Set 3 Unlocked!");
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