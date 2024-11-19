import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
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

      <FilesForm handleFormSubmit={handleFormSubmit} />

      {loading && <p>Loading files...</p>}
      {error && <Alert variant="danger">{error.message}</Alert>}
      {!loading && !error && <FilesTable files={files} />}
    </Container>
  );
}

export default App;
