window.addEventListener("DOMContentLoaded",()=>{
    const card = localStorage.getItem("card");
    if(card){
        const selectedCard = JSON.parse(card);
        console.log(card)
        const {titulo,img,description} = selectedCard;

        console.log(titulo,img,description);
        const cardCont = document.querySelector(".card-selection");

        cardCont.innerHTML = `
            <h1>${titulo}</h1>
            <img src="${img}" width=50">
            <p>${description}</p>
        `;

    }
})