let text = document.getElementById("text");
let goster = document.getElementById("goster");

text.onkeyup = function(){
    let say = "0"
    for(let i = 0; i<text.value.length; i++){
        if(text.value[i] == " "){
            say++;
        }else if(text.value[i] == "."){
            say++;
        }
        
    } goster.innerHTML = ` Yazilan cumlede ${say} dene soz var`;
}