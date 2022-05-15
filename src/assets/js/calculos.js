const form = document.querySelector(".typing-area"),
    calculos = document.querySelector(".totalcompra");

setInterval(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../../controller/calculos.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                calculos.innerHTML = data;
                scrollToBottom();
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}, 500);