// https://viacep.com.br/ws/01001000/json/

let btnConsultar = document.querySelector(".btn-consultar")
btnConsultar.addEventListener('click',()=>{
    console.log("ola mundo");
    let inputCEP = document.querySelector("#cep-input").value
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", `https://viacep.com.br/ws/${inputCEP}/json/`)
    xmlhttp.send()
    xmlhttp.addEventListener('load', ()=>{
        let cepHTML = document.querySelector(".cep")
        let logradouroHTML = document.querySelector(".logradouro")
        let complementoHTML = document.querySelector(".complemento")
        let bairroHTML = document.querySelector(".bairro")
        let localidadeHTML = document.querySelector(".localidade")
        let ufHTML = document.querySelector(".uf")
        let dddHTML = document.querySelector(".ddd")
        console.log(xmlhttp.responseText);
        let cepObjeto = JSON.parse(xmlhttp.responseText)
        console.log(cepObjeto);

        cepHTML.innerText = cepObjeto.cep
        logradouroHTML.innerText = cepObjeto.logradouro
        complementoHTML.innerText = cepObjeto.complemento
        bairroHTML.innerText = cepObjeto.bairro
        localidadeHTML.innerText = cepObjeto.localidade
        ufHTML.innerText = cepObjeto.uf
        dddHTML.innerText = cepObjeto.ddd
    })   
})

