
/* This function validates all the inputs in the form
in this function will be different consts assigned to different fields*/

const validation =()=>{
//
        const useid = document.getElementById('userId');
        if(useid.value.length <5 || useid.value.length >12 ){
            alert('UserID Required and must be of length 5 to 12');
        }
// this piece of code will validate the password field and ensure its length is not less 7 or greater than 12
        const userpassword = document.getElementById('Password');
        if(userpassword.value.length <7 || userpassword.value.length >12 ){
            alert('password Required and must of length 7 to 12');
        
        }

        const username = document.getElementById('name');
        const alphabates = /^[A-Za-z]+$/;
        if(username.value.match(alphabates)){
            return true;
        }
        else{
            alert('required and only alphabates');
        }

        

        
}
