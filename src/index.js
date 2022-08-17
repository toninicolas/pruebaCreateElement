import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const newP = document.createElement("p");
newP.textContent = "Hola mundo";
newP.classList.add("nuevaClase");
newP.setAttribute("id","errorMsg");
document.getElementById("app").insertAdjacentElement("afterend",newP);