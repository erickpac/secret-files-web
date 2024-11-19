import { Container } from "react-bootstrap";
import FilesForm from "./components/form";
import FilesTable from "./components/table";
import { useState } from "react";
import useFetchFiles from "./hooks/useFetchFiles";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [fileName, setFileName] = useState("");
  const { files, loading, error } = useFetchFiles(fileName);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fileName = formData.get("fileName");
    setFileName(fileName);
  };

  return (
    <Container>
      <h1>Secret Files</h1>

      {loading && <p>Loading files...</p>}
      {error && <p>Error loading files: {error.message}</p>}
      {!loading && !error && (
        <>
          <FilesForm handleFormSubmit={handleFormSubmit} />
          <FilesTable files={files} />
        </>
      )}
    </Container>
  );
}

export default App;
