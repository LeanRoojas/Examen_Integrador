window.addEventListener("DOMContentLoaded",()=>{

    //Obetenemos los personajes y los guardamos en local storage con la key "card"
   const orderbuttons = document.querySelectorAll("button[data-order-caracters]");
   orderbuttons.forEach(item =>{
       item.addEventListener("click",(event)=>{
           
            const button = event.currentTarget;
            const container = button.parentNode.parentNode;
            const img = container.querySelector("img");
            let carta = {
                titulo: container.querySelector(".card-title").innerText,
                img: img.getAttribute("src"),
                description: container.querySelector(".description").innerText,
                id: button.getAttribute("data-order-caracters")
            }
            localStorage.setItem("card",JSON.stringify(carta));
             
       })
   })

   //Obtenemos las gorras, guardamos en localStorage y nos envia al formulario
   const hats = document.querySelectorAll("button[data-order-hat]");
   hats.forEach(hat => {
       hat.addEventListener("click",(event)=>{
            const button = event.currentTarget;
            const container = button.parentNode;
            const img = container.querySelector("img");
            let hat = {
                titulo: container.querySelector("p").innerText,
                img: img.getAttribute("src")
            }
            localStorage.setItem("hat",JSON.stringify(hat));
            const url = window.location.href.replace("index.html","order.html");
             window.location.href = url;
        })
   })


   
})


