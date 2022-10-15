const qrInputData = document.querySelector(".data");
const btn = document.querySelector("#submit");
const qrcode = document.querySelector("#img")
let main = document.querySelector(".main")

btn.addEventListener("click", () => {
    main.style.height = "500px";
    let qrdata = qrInputData.value;
    console.log(qrdata)
    if(!qrdata){return};
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${qrdata}`
    qrcode.style.display = "block"
})