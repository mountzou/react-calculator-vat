import React from 'react';

function VATInput({ label, id, value, onChange, disabled = false, step = "1" }) {
  return (
    <div className="row justify-content-center py-2">
      <div className="col-8 col-md-4">
        <div className="form-group">
          <label htmlFor={id}>{label}</label>
          <input
            type="number"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className="form-control"
            step={step}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

export default VATInput;
