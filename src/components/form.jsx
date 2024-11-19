/* eslint-disable react/prop-types */
import { Form, Button } from "react-bootstrap";

export const SearchFileForm = ({ handleFormSubmit }) => (
  <Form onSubmit={handleFormSubmit} className="mb-3">
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Control
        type="text"
        name="fileName"
        placeholder="Search by file name"
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Search
    </Button>
  </Form>
);
