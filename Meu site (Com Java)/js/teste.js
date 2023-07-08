function muda_fundo(){

    let footer = document.getElementById("corpo");
    let cor = document.getElementById("i_cor").value;

    switch(cor){
        case "1":
            footer.style.backgroundColor = "#E34E58";
            break;
        case "2":
            footer.style.backgroundColor = "#D2CECB";
            break;
        case "3":
            footer.style.backgroundColor = "#EEDC53";
                break;
        default:
            footer.style.backgroundColor  = "#000000";
        
                       
    }

}