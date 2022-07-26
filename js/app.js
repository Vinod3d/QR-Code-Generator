 const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector('.form input'),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");

       
    generateBtn.addEventListener("click", () => {
        let qrValue = qrInput.value;
        // console.log(qrValue);
        if(!qrValue) return; //if the input is empty then return from here
        // getting a QR code of user entered value using the qrserver
        // api and passing the api returned img src to qrImg
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
        wrapper.classList.add('active');
    })