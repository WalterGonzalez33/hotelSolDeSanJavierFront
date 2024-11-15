
const apiUrl = import.meta.env.VITE_API_URL;

export const create = async (dataBody, endpoint) => {
    try {
        const parseData = JSON.stringify(dataBody)
        const response = await fetch(`${apiUrl}${endpoint}`, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
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
    const response = await fetch(`${apiUrl}${endpoint}`)
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
      const parseData = JSON.stringify(dataBody)
      const response = await fetch(`${apiUrl}${endpoint}`, {
          method: 'PUT',
          headers:{
              "Content-Type": "application/json",
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
        const response = await fetch(`${apiUrl}${endpoint}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
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
