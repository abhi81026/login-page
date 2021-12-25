function login()
{
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(uname =='')
    {
        alert("Please enter User name.");
    }
    else if(pwd=='')
    {
        alert("Enter the password");
    }
    else if(!filter.test(uname))
    {
        alert("Enter valid email id");
    }
    else if(pwd.length < 6 || pwd.length > 15)
    {
        alert("Password min length is 6 and max length is 15");
    }
    else
    {
alert('Thank You for Login');
//Redirecting to other page or webste code or you can set your own html page.
   window.location = "";
        }
}
//Reset Inputfield code.
function clearFunc()
{
    document.getElementById("email").value="";
    document.getElementById("pwd1").value="";
}	