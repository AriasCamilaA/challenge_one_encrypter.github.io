const keys = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
const output = document.querySelector(".output")
const expecting = document.querySelector("#expecting");
const secret = document.querySelector("#secret");
const btn_copiar = document.querySelector(".btn_copiar");
const btn_encriptar = document.querySelector("#btn_encriptar");
const btn_desencriptar = document.querySelector("#btn_desencriptar");
const message = document.querySelector("#message");
const info = document.querySelector(".info")

//Listeners
btn_encriptar.addEventListener("click",encriptar)
btn_desencriptar.addEventListener("click",desencriptar)



function mostrar(my_message){
    output.style.justifyContent = "space-between";
    expecting.style.display = "none";
    secret.style.display = "flex";
    btn_copiar.style.display = "flex";
    secret.textContent = my_message;
}

function alerta(){
    info.style.display = "flex";
    setTimeout(() => {
        info.style.display = "none";
    }, 2000);
}

function encriptar(){
    let messageArr = [];
    if (message.value != "") {
        messageArr = message.value.split("");
        for (let key = 0; key < keys.length; key++) {
            for (var i = 0; i < messageArr.length; i++) {
                if (messageArr[i] == keys[key][0]) {
                    messageArr[i] = keys[key][1];
                }
            }    
        };
        let my_message ="";
        messageArr.forEach(function(letters) {
            my_message += letters;
        });
        mostrar(my_message);
    }else{
        alerta();
    }
}

function desencriptar(){
    let my_message = message.value;
    if (message.value != "") {
        for (let key = 0; key < keys.length; key++) {
            my_message = my_message.replace( RegExp(keys[key][1], 'g'),keys[key][0])
        };
        mostrar(my_message);
    }else{
        alerta();
    }
}

function copiar(){
    navigator.clipboard.writeText(secret.innerHTML)
}