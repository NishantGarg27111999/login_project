let signup = document.getElementById("signup")
let login = document.getElementById("login");
if (window.innerWidth <= 300) {
    function displacelogin() {
        login.style.transform = "translateY(-440px)"
        login.style.opacity = "0";
        
        signup.style.transform = "translateY(340px)"
        signup.style.opacity = "1";



    }
    function displaceSignUp() {
        login.style.transform = "translateY(0px)"
        login.style.opacity = "1";
        // signup.style.display="flex";
        signup.style.transform = "translateY(0px)"
        signup.style.opacity = "0"

    }


}
else if(window.innerWidth <= 415) {
    function displacelogin() {
        login.style.transform = "translateY(-440px)"
        login.style.opacity = "0";
        
        signup.style.transform = "translateY(285px)"
        signup.style.opacity = "1";



    }
    function displaceSignUp() {
        login.style.transform = "translateY(0px)"
        login.style.opacity = "1";
        // signup.style.display="flex";
        signup.style.transform = "translateY(0px)"
        signup.style.opacity = "0"

    }


}

else if(window.innerWidth < 1051) {
    function displacelogin() {
        login.style.transform = "translateY(-440px)"
        login.style.opacity = "0";
        
        signup.style.transform = "translateY(440px)"
        signup.style.opacity = "1";



    }
    function displaceSignUp() {
        login.style.transform = "translateY(0px)"
        login.style.opacity = "1";
        // signup.style.display="flex";
        signup.style.transform = "translateY(0px)"
        signup.style.opacity = "0"

    }


}

else if(window.innerWidth>1050){
    function displacelogin() {
        login.style.transform = "translateX(-290px)"
        login.style.opacity = "0";
        // signup.style.display="flex";
        // signup.style.display="flex";
        // signup.style.right="-290px";
        signup.style.transform = "translateX(-270px)"
        signup.style.opacity = "1";



    }
    function displaceSignUp() {
        login.style.transform = "translateX(0px)"
        login.style.opacity = "1";
        // signup.style.display="flex";
        signup.style.transform = "translateX(0px)"
        signup.style.opacity = "0"

    }
}

