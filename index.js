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
            // const url = window.location.href.replace("index.html","order.html");
            // window.location.href = url;
       })
   })



   
})


