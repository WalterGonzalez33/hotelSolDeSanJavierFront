import { useEffect, useRef, useCallback, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);

  const prevValues = useRef({ endPoint, reqMethod, bodyData, headers });

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl + endPoint}`, {
        method: reqMethod,
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
  }, [endPoint, reqMethod, bodyData, headers]);

  const triggerFetch = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    if (counter > 0) {
      fetchData();
    }
  }, [counter, fetchData]);

  useEffect(() => {
    if (
      prevValues.current.endPoint !== endPoint ||
      prevValues.current.reqMethod !== reqMethod ||
      JSON.stringify(prevValues.current.bodyData) !==
        JSON.stringify(bodyData) ||
      JSON.stringify(prevValues.current.headers) !== JSON.stringify(headers)
    ) {
      prevValues.current = { endPoint, reqMethod, bodyData, headers };
    }
  }, [endPoint, reqMethod, bodyData, headers]);

  return { data, loading, error, triggerFetch };
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