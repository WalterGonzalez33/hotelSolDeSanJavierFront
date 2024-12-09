const apiUrl = import.meta.env.VITE_API_URL;

export const getToken = () => {
  if(sessionStorage.getItem('userToken')){
    return JSON.parse(sessionStorage.getItem('userToken')).token ?? false
  }
  return false
}

export const checkValidateToken = async () => {
  try {
    const token = getToken()
    
    if(!token) { return false }
    

    const response = await fetch(`${apiUrl}checkToken`, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            Authorization: token
        }
      })
      if (response.status >= 401){
        return false
      }
      return token
  } catch (err) {
      console.warn(err)
      return err
  }
}

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(apiUrl + 'login', {
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

export const create = async (dataBody, endpoint) => {
    try {
      const token = await checkValidateToken()
      if( !token ) { return false }

      const parseData = JSON.stringify(dataBody)
      const response = await fetch(`${apiUrl}${endpoint}`, {
          method: 'POST',
          headers:{
              "Content-Type": "application/json",
              Authorization: token
          },
          body: parseData
        })
        if (response.status >= 500){
          throw new Error(`Error ${response.status}: ${response.message}`);
        }
        return response
    } catch (err) {
        console.warn(err)
        return err
    }
}

export const getItem = async (endpoint) => {
  try {
    const token = await checkValidateToken()
    if(!token) { return false }

    const response = await fetch(`${apiUrl}${endpoint}`,
      {
        headers:{
          Authorization: token
        }
      }
    )
      if (response.status >= 500){
        throw new Error(`Error ${response.status}: ${response.message}`);
      }
    const res = await response.json()
    return res
  } catch (err) {
    console.warn(err)
    return err
  }
}

export const editItem = async (dataBody, endpoint) => {
  try {
    const token = await checkValidateToken()
    if(!token) { return false }

      const parseData = JSON.stringify(dataBody)
      const response = await fetch(`${apiUrl}${endpoint}`, {
          method: 'PUT',
          headers:{
              "Content-Type": "application/json",
              Authorization: token
          },
          body: parseData
        })
        if (response.status >= 500){
          throw new Error(`Error ${response.status}: ${response.message}`);
        }
        return response

  } catch (err) {
      console.warn(err)
      return err
  }
}


export const deleteItem = async (endpoint) => {
    try {
      const token = await checkValidateToken()
      if(!token) { return false }

        const response = await fetch(`${apiUrl}${endpoint}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        });
        
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response;

    } catch (err) {
        console.error(err);
        return err;
    }
};
