const fetchFiles = async (fileName) => {
  try {
    const newURL = new URL("http://localhost:3000/api/v1/files/data");

    if (fileName) {
      newURL.searchParams.append("fileName", fileName);
    }

    const response = await fetch(newURL.toString());
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching files:", error);
    throw error;
  }
};

export default fetchFiles;
