const urlClientes = "http://localhost/clase2/Backend/controller.php?op=GetAll";
const urlNuevoCluente =
  "http://localhost/clase2/Backend/controller.php?op=insert";
const urlEliminar = "http://localhost/clase2/Backend/controller.php?op=delete";
const urlClienteId = "http://localhost/clase2/Backend/controller.php?op=GetId";
const urlUpdate = "http://localhost/clase2/Backend/controller.php?op=update";

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

export async function selectOne(id) {
  try {
    const response = await fetch(`${urlClienteId}&id=${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function updateClientes(data) {
  try {
    const response = await fetch(urlUpdate,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
  } catch (error) {
    console.log(error);
  }
}
