export const fetchFiles = async (fileName) => {
  try {
    const newURL = new URL("http://localhost:3000/api/v1/files/data");

    if (fileName || fileName !== "") {
      newURL.searchParams.append("fileName", fileName);
    }

    const response = await fetch(newURL.toString());
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch files, ${error.message}`);
  }
};
