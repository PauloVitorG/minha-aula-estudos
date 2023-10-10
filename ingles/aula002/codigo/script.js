function verde() {

    let valores = ["i", "she", "you", "it", "it", "we", "i", "they"];

    for (let i = 1; i <= 8; i++) {
        let res = document.getElementById(`res${i}`);
        
        if ( res.value.toLowerCase() == valores[i - 1]) {
            res.style.backgroundColor = "#31FF4E";
    }
}
}