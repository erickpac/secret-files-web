/* eslint-disable react/prop-types */
import { Form, Button } from "react-bootstrap";

const FilesForm = ({ handleFormSubmit }) => (
  <Form onSubmit={handleFormSubmit}>
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Control
        type="text"
        name="fileName"
        placeholder="Search by file name"
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

export default FilesForm;
