const keys = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
const output = document.querySelector(".output")
const expecting = document.querySelector("#expecting");
const secret = document.querySelector("#secret");
const btn_copiar = document.querySelector(".btn_copiar")
var message = "";
var messageArr = [];

function mostrar(){
    output.style.justifyContent = "space-between";
    expecting.style.display = "none";
    secret.style.display = "flex";
    btn_copiar.style.display = "flex";
    secret.textContent = message;
}

function encriptar(){
    message = document.querySelector("#message").value;
    if (message != "") {
        messageArr = message.split("");
        for (let key = 0; key < keys.length; key++) {
            for (var i = 0; i < messageArr.length; i++) {
                if (messageArr[i] == keys[key][0]) {
                    messageArr[i] = keys[key][1];
                }
            }    
        };
        message ="";
        messageArr.forEach(function(letters) {
            message += letters;
        });
        mostrar();
    }
}

function desencriptar(){
    message = document.querySelector("#message").value;
    if (message != "") {
        for (let key = 0; key < keys.length; key++) {
            message = message.replace( RegExp(keys[key][1], 'g'),keys[key][0])
        };
        mostrar();
    }
}

function copiar(){
    navigator.clipboard.writeText(secret.innerHTML)
}