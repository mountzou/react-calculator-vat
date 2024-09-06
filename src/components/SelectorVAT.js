import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function VATSelector({ value, onChange }) {
  return (
    <Row className="justify-content-center py-2">
      <Col xs={8} md={4}>
        <Form.Group controlId="vat-category">
          <Form.Label>Συντελεστής ΦΠΑ:</Form.Label>
          <Form.Select
            value={value}
            onChange={onChange}
            className="form-control"
          >
            <option value="6">6%</option>
            <option value="13">13%</option>
            <option value="24">24%</option>
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>
  );
}

export default VATSelector;
