import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const apiUrl = import.meta.env.VITE_API_URL;
if (!apiUrl) {
  console.warn(
    "Warning: `VITE_API_URL` is not defined in the environment variables."
  );
}

const useFetch = ({
  endPoint = "/",
  reqMethod = "GET",
  bodyData = null,
  headers = {},
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl + endPoint}`, {
          method: `${reqMethod}`,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          ...(reqMethod !== "GET" && { body: JSON.stringify(bodyData) }),
        });
        if (!response.ok)
          throw new Error(`Error ${response.status}: ${response.message}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(`Error: ${err.message} (EndPoint: ${endPoint})`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endPoint, reqMethod, bodyData, headers]);
  return { data, loading, error };
};

useFetch.propTypes = {
  endPoint: PropTypes.string,
  reqMethod: PropTypes.string,
  bodyData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.null,
  ]),
  headers: PropTypes.object,
};
export default useFetch;
