import React from 'react';

function VATSelector({ value, onChange }) {
  return (
    <div className="row justify-content-center py-2">
      <div className="col-8 col-md-4">
        <div className="form-group">
          <label htmlFor="vat-category">Συντελεστής ΦΠΑ:</label>
          <select
            id="vat-category"
            name="vat-category"
            className="form-control"
            value={value}
            onChange={onChange}
          >
            <option value="6">6%</option>
            <option value="13">13%</option>
            <option value="24">24%</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default VATSelector;
