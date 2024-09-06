import React from 'react';

function Header() {
  return (
    <div className="p-1 bg-light">
      <div className="container-fluid pt-5 pb-4 px-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="display-4 fw-bold text-center text-md-start fs-1">Υπολογισμός ΦΠΑ</h1>
            <p className="text-center text-md-start fs-4">
              Για τον υπολογισμό του ΦΠΑ απαιτείται η συμπλήρωση είτε της τιμής χωρίς ΦΠΑ ή της τιμής με ΦΠΑ.
              Για τον υπολογισμό του ΦΠΑ μπορούν να χρησιμοποιηθούν συντελεστές ΦΠΑ 24%, 13% και 6%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
