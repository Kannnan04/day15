const form = document.querySelector("form");
const body = document.querySelector("tbody");
const table = document.querySelector("table");

function action(e) {
    e.preventDefault();

    const firstname =  document.getElementById("first-name").value
    const lastname =  document.getElementById("last-name").value
    const address =  document.getElementById("address").value
    const pincode =  document.getElementById("pincode").value
    const state =  document.getElementById("state").value
    const country =  document.getElementById("country").value
    


   body.innerHTML+=`
   <tr>
   <td>${firstname}</td>
   <td>${lastname}</td>
   <td>${address}</td>
   <td>${pincode}</td>
   <td>${state}</td>
   <td>${country}</td>
  

   <td><button class ="deleteBtn">delete</button></td>
   </tr>
   `;
   

}
function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn")) {
      return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
  }


form.addEventListener("submit", action);
table.addEventListener("click", onDeleteRow);