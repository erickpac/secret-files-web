/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const FilesTable = ({ files }) => {
  if (!files || files.length === 0) {
    return <Alert variant="info">No files found</Alert>;
  }

  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>File name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, index) => (
          <tr key={index}>
            <td>{file.file}</td>
            <td>{file.text}</td>
            <td>{file.number}</td>
            <td>{file.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FilesTable;
