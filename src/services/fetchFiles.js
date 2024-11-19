const fetchFiles = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/files/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching files:", error);
    throw error;
  }
};

export default fetchFiles;
