function verde() {

    let cres = ["him", "them", "her", "me", "us", "you", "them", "you"];
    let res = document.getElementsByClassName("res");

    for (let i = 0; i < cres.length; i++) {    
        console.log(res[i].value)

        if ( res[i].value.toLowerCase() == cres[i]) {
            res[i].style.borderBottom = "3px solid var(--cor1)";
    } else {
        res[i].style.borderBottom = "3px solid var(--cor4)";
    }
}
}