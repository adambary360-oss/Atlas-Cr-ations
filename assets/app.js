
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