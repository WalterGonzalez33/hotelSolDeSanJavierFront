import { useEffect, useRef } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { checkValidateToken } from "../utils/requests";

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
  reload,
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);

  const prevValues = useRef({ endPoint, reqMethod, bodyData, headers, reload });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = await checkValidateToken();
        if (!token) {
          return false;
        }
        const response = await fetch(`${apiUrl + endPoint}`, {
          method: `${reqMethod}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
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
  }, [counter]);

  useEffect(() => {
    if (
      prevValues.current.endPoint !== endPoint ||
      prevValues.current.reqMethod !== reqMethod ||
      prevValues.current.reload !== reload ||
      JSON.stringify(prevValues.current.bodyData) !==
        JSON.stringify(bodyData) ||
      JSON.stringify(prevValues.current.headers) !== JSON.stringify(headers)
    ) {
      setCounter((prev) => prev + 1);
      prevValues.current = { endPoint, reqMethod, bodyData, headers, reload };
    }
  }, [endPoint, reqMethod, bodyData, headers, reload]);

  return { data, loading, error };
};

useFetch.propTypes = {
  endPoint: PropTypes.string,
  reqMethod: PropTypes.string,
  bodyData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.oneOf([null]),
  ]),
  headers: PropTypes.object,
};

export default useFetch;
