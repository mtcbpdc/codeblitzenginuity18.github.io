function signin(){
    var x=document.getElementById('exampleInputEmail1');
    var y=document.getElementById('exampleInputPassword1');
    
    if(x.value=="admin"){
        if(y.value=="password"){
            var url="C:\\Users\\Melvin Mathew\\Desktop\\Websites\\College\\participant.html";
            location.href=url;
        }

        else{
            alert("Wrong password!!");
        }
    }

    else{
        alert("User doesn't exist!!");
    }
}