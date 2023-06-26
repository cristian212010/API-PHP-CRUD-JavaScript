const urlClientes = "http://localhost/clase2/Backend/controller.php?op=GetAll";
const urlNuevoCluente =
  "http://localhost/clase2/Backend/controller.php?op=insert";
const urlEliminar = "http://localhost/clase2/Backend/controller.php?op=delete";

export const getClientes = async () => {
  try {
    const clientes = await fetch(urlClientes);
    const datosClientes = clientes.json();
    return datosClientes;
  } catch (error) {
    console.log(error);
  }
};

export const nuevoCliente = async (registro) => {
  try {
    await fetch(urlNuevoCluente, {
      method: "POST",
      body: JSON.stringify(registro),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
  } catch (error) {}
};

export const deleteCliente = async (id) => {
  try {
    await fetch(`${urlEliminar}&id=${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
