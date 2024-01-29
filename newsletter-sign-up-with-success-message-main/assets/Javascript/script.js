const form = document.querySelector("#botao");
const error = document.querySelector("#error");
const email = document.querySelector("#iemail");
const formula = document.querySelector("#formula");
const sucesso = document.querySelector("#sucesso");
const dismiss = document.querySelector("#dismiss");
const informar = document.querySelector("#informar");

function validarEmail(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){return true;}
    
    return false;
}

form.addEventListener("click", (exibirErro) => {
    
    if(email.value === "" || validarEmail(email.value) === false){
        error.innerHTML = "Invalid e-mail value";

        email.style = "background-color: #ff000065; border:1px solid #cb918c; color white; ";
        
        
        return;
    }
    
    formula.style.display = "none";
    sucesso.style.display = "flex";

    informar.innerText = email.value;
});

dismiss.addEventListener("click",()=>{
    sucesso.style.display = "none";
})