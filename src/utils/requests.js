
const apiUrl = import.meta.env.VITE_API_URL;

export const createUser = async (dataBody) => {
    try {
        const parseData = JSON.stringify(dataBody)
        const response = await fetch(`${apiUrl}users`, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: parseData
          })
          if (!response.ok){
            throw new Error(`Error ${response.status}: ${response.message}`);
          }
          const result = await response.json()
          return result

    } catch (err) {
        console.error(err)
    }
}