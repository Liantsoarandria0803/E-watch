let x=4;
document.getElementById("menu").onclick= function onOff(){
    console.log();
    if(x==4){
        x=x+1;
        document.getElementById("menu").innerText="X"
        document.getElementById('navMenu').innerHTML= '<div class="navbar"><a href="./index.html">Home</a></br></br><a href="./asset/html/about.html">About</a></br></br><a href="./asset/html/service.html">Services</a></br></br><a href="./asset/html/Contact.html" >Contact</a></div>';
    }
    else if(x==5){
        document.getElementById("menu").innerText="..."
        document.getElementById('navMenu').innerHTML= "";
        x=x-1;
    }
} 

