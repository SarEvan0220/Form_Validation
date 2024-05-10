const nameInput = document.querySelector("#name");
const email=document.querySelector("#email");
const message = document.querySelector("#message");
const success= document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");



function validateform()
{
    clearmessage();
    let errorFlag=false;
    if(nameInput.Value.length <1)
    {
        errorNodes[0].innerText="Name cannot be Blank";
        nameInput.classList.add("error-border"); //when the error is shopw that time the border color also changing
        errorFlag=true;
    }
    if(!emailIsValid(email.value))
    {
        errorNodes[1].innerText="Invalid Email";
        email.classList.add("error-border");
        errorFlag=true;
    }
    if(message.value.length < 1 && message.value.length <=30)
    {
        errorNodes[2].innerText="Please Enter your Proper Message";
        message.classList.add("error-border");
        errorFlag=true;
    }
    if(!errorFlag)
    {
        success.innerHTML="Form Validation successful";
    }
}
function clearMessages()
{
    for(let i=0;i<=errorNodes.length;i++)
    {
        errorNodes[i].innerText=" ";
    }

success.innerText=" ";

nameInput.classList.remove("error-border");
email.classList.remove("error-border");
message.classList.remove("error-border");
}
function emailIsValid(email)
{
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
}
