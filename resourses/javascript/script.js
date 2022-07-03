
var email = document.querySelectorAll('.email-validation');
	email[0].addEventListener('change' , function(){
		submitForm(0);
	}, false);
	email[1].addEventListener('change' , function(){
		submitForm(1);
	}, false);
	function submitForm(i) 
       {
    
    var emailValue = email[i].value;
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var freeRegex = /^[\w-\.]+@([yahoo+\.])+[\w-]{2,4}$/;

     if(!emailValue.match(emailRegex)) 
        {
           alert("enter a valid email address");
        }
        
     if(emailValue.match(freeRegex))
        {   
         email[i].value = emailValue.replace(/\./g,',');
        }
         
      return true; 
     }

(function(){
	
    document.querySelector('.form__input-countainer--input--1').addEventListener( 'focus' , function(){
        document.querySelector('.form__input-countainer--icon--1').style.transform = "scaleY(1.3) scaleX(1.05)" ;
        document.querySelector('.form__input-countainer--icon--1').style.opacity = "0" ;
    });
    document.querySelector('.form__input-countainer--input--1').addEventListener( 'focusout' , function(){
        document.querySelector('.form__input-countainer--icon--1').style.opacity = "1" ;
        document.querySelector('.form__input-countainer--icon--1').style.transform = "scale(1)" ;
    });
    document.querySelector('.form__input-countainer--input--2').addEventListener( 'focus' , function(){
        document.querySelector('.form__input-countainer--icon--2').style.transform = "scaleY(1.3) scaleX(1.05)" ;
        document.querySelector('.form__input-countainer--icon--2').style.opacity = "0" ;
    });
    document.querySelector('.form__input-countainer--input--2').addEventListener( 'focusout' , function(){
        document.querySelector('.form__input-countainer--icon--2').style.opacity = "1" ;
        document.querySelector('.form__input-countainer--icon--2').style.transform = "scale(1)" ;
    });
    document.querySelector('.form__textarea-container--textarea').addEventListener( 'focus' , function(){
        document.querySelector('.form__input-countainer--icon--3').style.transform = "scaleY(1.1) scaleX(1.08)" ;
        document.querySelector('.form__input-countainer--icon--3').style.opacity = "0" ;
    });
    document.querySelector('.form__textarea-container--textarea').addEventListener( 'focusout' , function(){
        document.querySelector('.form__input-countainer--icon--3').style.opacity = "1" ;
        document.querySelector('.form__input-countainer--icon--3').style.transform = "scale(1)";
    });
    document.querySelector('.form__input-countainer--input--4').addEventListener( 'focus' , function(){
        document.querySelector('.form__input-countainer--icon--4').style.transform = "scaleY(1.3) scaleX(1.05)" ;
        document.querySelector('.form__input-countainer--icon--4').style.opacity = "0" ;
    });
    document.querySelector('.form__input-countainer--input--4').addEventListener( 'focusout' , function(){
        document.querySelector('.form__input-countainer--icon--4').style.opacity = "1" ;
        document.querySelector('.form__input-countainer--icon--4').style.transform = "scale(1)" ;
    });
    document.querySelector('.address__location--icons--location').addEventListener( 'mouseover' , function(){
        document.querySelector('.address__location--map').style.zIndex = "12";
    });
    document.querySelector('.address__location--icons--location').addEventListener( 'mouseleave' , function(){
        document.querySelector('.address__location--map').style.zIndex = "-29";
    });
    document.querySelector('#iframe').addEventListener( 'mouseover' , function(){
        document.querySelector('.address__location--map').style.zIndex = "12";
    });
    document.querySelector('#iframe').addEventListener( 'mouseleave' , function(){
        document.querySelector('.address__location--map').style.zIndex = "-29";
    });
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
    function fader() {
            document.querySelector('.mobile-navi').style.opacity = "0";
            document.querySelector('.mobile-navi').style.visibility = "hidden";
            document.querySelector('.mobile-navi').style.transition = "all .5s";
            document.querySelector('.nav__logo').style.position = "absolute";
            document.querySelector('.nav-mob-container').classList.remove('active');
            q = 0;
    }
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