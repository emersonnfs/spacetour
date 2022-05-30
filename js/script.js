const botaoSubmit = document.getElementById('btnEnviar')

botaoSubmit.addEventListener("click", ()=>{
    
    const campos = document.querySelectorAll("input[type='text'],input[type='email'], input[type='date'], textarea[id='msgId']")

    for(let x=0; x < campos.length; x++){

        if(campos[x].value == ""){
            alert("O CAMPO "+ campos[x].placeholder + " NÃO FOI PREENCHIDO")
            return
        }
    }
    alert("Os dados foram cadastrados com sucesso")
    document.querySelector(".cadastro").submit()
})