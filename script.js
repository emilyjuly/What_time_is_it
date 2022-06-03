function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    var data = new Date()
    //var hora = data.getHours() 
    var hora = 13 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e1d7c4'
    }
    else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#e0c299'
    }
    else{
        //BOA NOITE!
        img.scr = 'fotonoite.png'
        document.body.style.background = '#002650'
    }
}