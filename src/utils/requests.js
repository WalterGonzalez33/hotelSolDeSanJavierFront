
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
        return err
    }
}