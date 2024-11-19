import { useState, useEffect } from "react";
import { fetchFiles } from "../services/fetchFiles";

export const useFetchFiles = (fileName) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFiles(fileName);
        const files = data.flatMap((file) =>
          file.lines.map((line) => ({ ...line, file: file.file })),
        );
        setFiles(files);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fileName]);

  return { files, loading, error };
};
