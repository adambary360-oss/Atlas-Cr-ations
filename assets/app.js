
const btnshowserve = document.getElementById("btnshowserve")
const hidingcontent = document.getElementById("hidingcontent")

btnshowserve.addEventListener("click", () => {
    hidingcontent.classList.toggle("hidden") //toggle atchecke ila kan classila makanch i zido ola ila kan hydo
})
const btnopenform = document.getElementById("btnopenform")
const closemodal = document.getElementById("closemodal")
const modal = document.getElementById("modal")

btnopenform.addEventListener("click", () => { modal.showModal() })
closemodal.addEventListener("click", () => { modal.close() })


const btnajoutservice = document.getElementById("btnajoutservice")
const serviceInput = document.getElementById("serviceInput")
const listservice = document.getElementById("listservice")
console.log(listservice);

btnajoutservice.addEventListener("click", (e) => {
    e.preventDefault()
    const value = serviceInput.value.trim()
    if (!value) return;

    const serviceajouter = document.createElement("li")
    serviceajouter.className = "flex items-center justify-between gap-3 bg-slate-100 text-slate-900 px-4 py-3 rounded-2xl"

    const title = document.createElement("span");
    title.textContent = value;

    serviceajouter.append(title);
    listservice.appendChild(serviceajouter)
})


const testimonialsContainer = document.querySelector(".testimonials");

testimonialsContainer.addEventListener(
    "click",
    (e) => {
        if (e.target.closest(".details-btn")) return;

        const card = e.target.closest(".testimonial");
        if (!card) return;

        const cite = card.querySelector("cite");
        if (!cite) return;

        alert(cite.textContent);
    },
);

const productList = document.getElementById("productList")
const totalpanier = document.getElementById("total")
const panierlist = document.getElementById("panierlist")
let total = 0

productList.addEventListener("click", (e) =>{

    const btn = e.target.closest("button")
    if(!btn)return

    const name = btn.dataset.name
    const price = Number(btn.dataset.price)
    console.log(name,price);
    total += price
    totalpanier.textContent = total 
    const cart = document.createElement("li")
    cart.classList.add = "font-bold"
    cart.textContent = `${name} ${price}DH`
        
    panierlist.appendChild(cart)
    
})
const copier = document.getElementById("copier")

copier.addEventListener("click" , ()=>{
    console.log(copier);
    
    navigator.clipboard.writeText("© 2026 Atlas Créations — Tous droits réservés.")
    alert("copier")

})