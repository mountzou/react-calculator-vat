import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function VATInput({ label, id, value, onChange, disabled = false }) {
  return (
    <Row className="justify-content-center py-2">
      <Col xs={8} md={4}>
        <Form.Group controlId={id}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type="number"
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </Form.Group>
      </Col>
    </Row>
  );
}

export default VATInput;
