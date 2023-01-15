// Claves para validar
const keys = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
const tildes = [["a","á"],["e","é"],["i","í"],["o","ó"],["u","ú"]];

// Elementos html
const output = document.querySelector(".output")
const expecting = document.querySelector("#expecting");
const secret = document.querySelector("#secret");
const btn_copiar = document.querySelector(".btn_copiar");
const btn_encriptar = document.querySelector("#btn_encriptar");
const btn_desencriptar = document.querySelector("#btn_desencriptar");
const message = document.querySelector("#message");
const alert = document.querySelector(".alert");

// Listeners
btn_encriptar.addEventListener("click",encriptar);
btn_desencriptar.addEventListener("click",desencriptar);
btn_copiar.addEventListener("click",copiar);

// Para quitar tildes y dejar todo el documento en minúsculas
function limpiar(my_message){
    my_message = my_message.toUpperCase();
    my_message = my_message.toLowerCase();
    for (let i = 0; i < tildes.length; i++) {
        my_message = my_message.replace(RegExp(tildes[i][1], 'g'),tildes[i][0]);
    }
    return my_message;
}

// Para mostrar el mensaje encriptado o desencriptado
function mostrar(my_message){
    output.style.justifyContent = "space-between";
    expecting.style.display = "none";
    secret.style.display = "inline";
    btn_copiar.style.display = "flex";
    secret.textContent = my_message;
}
function ocultar(){
    expecting.style.display = "block";
    secret.style.display = "none";
    btn_copiar.style.display = "none";
}

// Para mostrar el mensaje de alerta cuando no se ingresa el texto
function alerta(alerta,color){
    setTimeout(() => {
        alert.style.display = "flex";
    }, 0);
    alert.textContent = "⚠  " + alerta;
    alert.style = `  box-shadow: 1px 1px 4px 0px var(${color});
                    color: var(${color});`;
    setTimeout(() => {
        alert.style.display = "none";
    }, 2000);
}

// Para encriptar el mensaje
function encriptar(){
    let messageArr = [];
    if (message.value != "") {
        messageArr = limpiar(message.value).split("");
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
        alerta("No ha ingresado texto para encriptar o desencriptar","--red-alert");
        ocultar();
    }
}

// Para desencriptar el mensaje
function desencriptar(){
    let my_message = limpiar(message.value);
    if (my_message != "") {
        for (let key = 0; key < keys.length; key++) {
            my_message = my_message.replace( RegExp(keys[key][1], 'g'),keys[key][0])
        };
        mostrar(my_message);
    }else{
        alerta("No ha ingresado texto para encriptar o desencriptar","--red-alert");
        ocultar();
    }
}

function copiar(){
    navigator.clipboard.writeText(secret.innerHTML);
    alerta("Texto copiado al portapapeles","--yellow-warning");
}