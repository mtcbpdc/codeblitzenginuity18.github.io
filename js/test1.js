document.write("<p><a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#codeNo1\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Type code</a></p>");
document.write("<div class=\"collapse\" id=\"codeNo1\"><div class=\"input-group mb-3\"><input type=\"text\" class=\"form-control\" id=\"code1\" placeholder=\"Enter code\" aria-label=\"Enter code\" aria-describedby=\"basic-addon2\"><div class=\"input-group-append\"><button class=\"btn btn-outline-light\" type=\"button\" onclick=\"checkcode1()\" id=\"submit1\">Submit</button></div></div></div>");
document.write("<p><button class=\"btn btn-primary\" id=\"set2\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample2\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Expand</button><div class=\"collapse\" id=\"collapseExample2\"><div class=\"card card-body\"><a class=\"text-info\" href=\"pascal978.html\" target=\"_blank\">Pascal</a><a class=\"text-info\" href=\"lisp385.html\" target=\"_blank\">Lisp</a><a class=\"text-info\" href=\"matlab471.html\" target=\"_blank\">EMOTICON</a></div></div></p>");

var a=document.getElementById("set2");
a.disabled=true;

function checkcode1(){
    var x=document.getElementById("code1");
    var y=document.getElementById("set2");

    if(x.value=="admin"){
        alert("Set 2 Unlocked!");
        y.disabled=false;
        document.getElementById("set2Card").style.backgroundColor="#39add1";
        
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








