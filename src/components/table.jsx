/* eslint-disable react/prop-types */
import { Table, Alert } from "react-bootstrap";

export const FilesTable = ({ files }) => {
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
            <td className="text-start">{file.file}</td>
            <td className="text-start">{file.text}</td>
            <td className="text-start">{file.number}</td>
            <td className="text-start">{file.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
