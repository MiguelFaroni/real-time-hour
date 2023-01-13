var body = document.querySelector("body")
body.addEventListener("onload",carregar())
function carregar(){
    let msg = document.querySelector("div.horario")
    let img = document.querySelector("img.foto")

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML =`Agora são ${hora} horas e ${min} minutos.`
    
    if(hora < 12 && hora >= 0){
        //Bom dia
        img.src="tuscany-grape-field-nature-51947.jpeg"
        document.body.style.background = "#e2cd9f"
    }
    else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src="foto_tarde.jpg"

    }
    else{
        //Boa noite
        img.src = "foto_noite.jpeg"
        document.body.style.background = "#000000e4"
    }
}
