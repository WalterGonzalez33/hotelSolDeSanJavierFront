export const URL_Usuario = import.meta.env.VITE_API_USUARIO

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL_Usuario, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    return respuesta
  } catch (error) {
    console.error(error);
    return { error: "Error en el login" };
  }
};

