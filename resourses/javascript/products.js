var email = document.querySelector('.email-validation');
	function submitForm() 
       {
    
    var emailValue = email.value;
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var freeRegex = /^[\w-\.]+@([yahoo+\.])+[\w-]{2,4}$/;

     if(!emailValue.match(emailRegex)) 
        {
           alert("enter a valid email address");
        }
        
     if(emailValue.match(freeRegex))
        {   
         email.value = emailValue.replace(/\./g,',');
			console.log("hi");
        }
         
      return true; 
     }





(function(){
	
	
	
	
    document.getElementById('firstbtn').addEventListener('click' , function(){
        document.getElementById('popup').style.opacity = "1";
        document.getElementById('popup').style.visibility = "visible";
        document.querySelector('.popup__container').style.transform = "scale(1) translate(-50% ,-50%)";
        document.querySelector('.popup__container').style.opacity = "1";
        document.querySelector('.popup__container').style.transition = "all .4s .2s"; 
        document.getElementById('popup').style.transition = "all .3s"; 
    })
    document.getElementById('secondbtn').addEventListener('click' , function(){
        document.getElementById('popup').style.opacity = "1";
        document.getElementById('popup').style.visibility = "visible";
        document.querySelector('.popup__container').style.transform = "scale(1) translate(-50% ,-50%)";
        document.querySelector('.popup__container').style.opacity = "1";
        document.querySelector('.popup__container').style.transition = "all .4s .2s"; 
        document.getElementById('popup').style.transition = "all .3s"; 
    })
    document.getElementById('thirdbtn').addEventListener('click' , function(){
        document.getElementById('popup').style.opacity = "1";
        document.getElementById('popup').style.visibility = "visible";
        document.querySelector('.popup__container').style.transform = "scale(1) translate(-50% ,-50%)";
        document.querySelector('.popup__container').style.opacity = "1";
        document.querySelector('.popup__container').style.transition = "all .4s .2s"; 
        document.getElementById('popup').style.transition = "all .3s"; 
    })
    document.getElementById('forthbtn').addEventListener('click' , function(){
        document.getElementById('popup').style.opacity = "1";
        document.getElementById('popup').style.visibility = "visible";
        document.querySelector('.popup__container').style.transform = "scale(1) translate(-50% ,-50%)";
        document.querySelector('.popup__container').style.opacity = "1";
        document.querySelector('.popup__container').style.transition = "all .4s .2s"; 
        document.getElementById('popup').style.transition = "all .3s"; 
    })
    document.getElementById('fifthbtn').addEventListener('click' , function(){
        document.getElementById('popup').style.opacity = "1";
        document.getElementById('popup').style.visibility = "visible";
        document.querySelector('.popup__container').style.transform = "scale(1) translate(-50% ,-50%)";
        document.querySelector('.popup__container').style.opacity = "1";
        document.querySelector('.popup__container').style.transition = "all .4s .2s"; 
        document.getElementById('popup').style.transition = "all .3s"; 
    })
    document.getElementById('sixthbtn').addEventListener('click' , function(){
        document.getElementById('popup').style.opacity = "1";
        document.getElementById('popup').style.visibility = "visible";
        document.querySelector('.popup__container').style.transform = "scale(1) translate(-50% ,-50%)";
        document.querySelector('.popup__container').style.opacity = "1";
        document.querySelector('.popup__container').style.transition = "all .4s .2s"; 
        document.getElementById('popup').style.transition = "all .3s"; 
    })
    document.getElementById('popup-leave').addEventListener('click' , function(){
        document.getElementById('popup').style.opacity = "0";
        document.getElementById('popup').style.visibility = "hidden";
        document.querySelector('.popup__container').style.transform = "scale(.5) translate(-50% ,-50%)";
        document.querySelector('.popup__container').style.opacity = "0";
        document.getElementById('popup').style.transition = "none";  
        document.querySelector('.popup__container').style.transition = "none"; 
    })
    window.addEventListener('click' , function(event){
        if(event.target == popup){
            document.getElementById('popup').style.opacity = "0";
            document.getElementById('popup').style.visibility = "hidden";  
            document.getElementById('popup').style.transition = "none";  
            document.querySelector('.popup__container').style.transform = "scale(.5) translate(-50% ,-50%)";
            document.querySelector('.popup__container').style.opacity = "0";
            document.querySelector('.popup__container').style.transition = "none"; 
        }
    })
    var q = 0;
    document.querySelector('.nav-mob-container').addEventListener('click' , function(){
        document.querySelector('.nav-mob-container').classList.toggle('active');
        if(q == 0){
            document.querySelector('.mobile-navi').style.opacity = "1";
            document.querySelector('.mobile-navi').style.visibility = "visible";
            document.querySelector('.mobile-navi').style.transition = "all .5s";
            document.querySelector('.nav__logo').style.position = "fixed";
            q = 1;
        }else{
            document.querySelector('.mobile-navi').style.opacity = "0";
            document.querySelector('.mobile-navi').style.visibility = "hidden";
            document.querySelector('.mobile-navi').style.transition = "all .5s";
            document.querySelector('.nav__logo').style.position = "absolute";
            q = 0;
        }
    })
    var n = 0;
    document.querySelector('.text-us').addEventListener('click' , function(){
        if(n == 0){
            document.querySelector('.wp-container').style.opacity = "1";
            document.querySelector('.wp-container').style.visibility = "visible";
            document.querySelector('.wp-container').style.transform = "translatey(-3rem)";
            document.querySelector('.wp-container').style.transition = "all .5s";
            document.querySelector('.text-us--wp').style.opacity = "0";
            document.querySelector('.text-us--wp').style.transform = "rotate(90deg) translate(50%, 50%)";
            document.querySelector('.text-us--wp').style.transition = "all .5s";
            document.querySelector('.text-us--cancel').style.opacity = "1";
            document.querySelector('.text-us--cancel').style.transform = "rotate(90deg) translate(-50%, 50%)";
            document.querySelector('.text-us--cancel').style.transition = "all .5s";
            n = 1;
        }else{
            document.querySelector('.wp-container').style.opacity = "0";
            document.querySelector('.wp-container').style.visibility = "hidden";
            document.querySelector('.wp-container').style.transform = "translatey(1rem)";
            document.querySelector('.wp-container').style.transition = "all .5s";
            document.querySelector('.text-us--wp').style.opacity = "1";
            document.querySelector('.text-us--wp').style.transform = "rotate(0deg) translate(-50%, -50%)";
            document.querySelector('.text-us--wp').style.transition = "all .5s";
            document.querySelector('.text-us--cancel').style.opacity = "0";
            document.querySelector('.text-us--cancel').style.transform = "rotate(-90deg) translate(-50%, -50%)";
            document.querySelector('.text-us--cancel').style.transition = "all .5s";
            n = 0;
        }
    })
    window.addEventListener('load' , function(){
        document.querySelector('.preloader').style.display ="none";
    })
}())
