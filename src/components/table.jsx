/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";

const FilesTable = ({ files }) => {
  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>File Name</th>
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
