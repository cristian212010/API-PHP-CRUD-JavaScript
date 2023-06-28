import { selectOne, updateClientes } from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
  datosCliente();
  editCliente();
});

const edit_nombre = document.querySelector("#editNombre");
const edit_nit = document.querySelector("#editNit");
const edit_representante = document.querySelector("#editRepresentante");
const edit_email = document.querySelector("#editEmail");
const edit_telefono = document.querySelector("#editTelefono");
const formularioEdit = document.querySelector("#formularioEditar");

async function datosCliente() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const datos = await selectOne(id);
    console.log(datos[0]);
    edit_nombre.value = datos[0].nombre_constructora;
    edit_nit.value = datos[0].nit_constructora;
    edit_representante.value = datos[0].nombre_representante;
    edit_email.value = datos[0].email_contacto;
    edit_telefono.value = datos[0].telefono_contacto;
  } catch (error) {
    console.log(error);
  }
}

async function editCliente() {
  try {
    formularioEdit.addEventListener("submit", (e) => {
      e.preventDefault();
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      const dataJson = {
        id_constructora: id,
        nombre_constructora: edit_nombre.value,
        nit_constructora: edit_nit.value,
        nombre_representante: edit_representante.value,
        email_contacto: edit_email.value,
        telefono_contacto: edit_telefono.value,
      };
      console.log(dataJson);
      updateClientes(dataJson);
      alert("Datos actualizados correctamente.");
      window.location = "cliente.html";
    });
  } catch (error) {
    console.log(error);
  }
}
