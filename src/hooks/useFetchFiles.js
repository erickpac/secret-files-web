import { useState, useEffect } from "react";
import fetchFiles from "../services/fetchFiles";

const useFetchFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFiles();
        setFiles(data);
      } catch (error) {
        console.error("Error fetching files:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { files, loading, error };
};

export default useFetchFiles;
