import React, { useState } from 'react';
import Header from './components/Header';
import VATInput from './components/InputVAT';
import VATSelector from './components/SelectorVAT';
import Footer from './components/Footer';

function App() {
  const [withVAT, setWithVAT] = useState(0);
  const [withoutVAT, setWithoutVAT] = useState(0);
  const [vatValue, setVatValue] = useState(0);
  const [vatCategory, setVatCategory] = useState(24);

  // Handle logic to calculate VAT based on user input
  const handleWithVATChange = (e) => {
    const value = parseFloat(e.target.value);
    setWithVAT(value);
    calculateWithoutVAT(value, vatCategory);
  };

  const handleWithoutVATChange = (e) => {
    const value = parseFloat(e.target.value);
    setWithoutVAT(value);
    calculateWithVAT(value, vatCategory);
  };

  const handleVATCategoryChange = (e) => {
    const value = parseFloat(e.target.value);
    setVatCategory(value);
    if (withoutVAT > 0) {
      calculateWithVAT(withoutVAT, value);
    } else if (withVAT > 0) {
      calculateWithoutVAT(withVAT, value);
    }
  };

  const calculateWithVAT = (noVAT, vatPercent) => {
    const vatAmount = noVAT * (vatPercent / 100);
    setVatValue(vatAmount.toFixed(2)); // Ensure VAT value has 2 decimal places
    setWithVAT((noVAT + vatAmount).toFixed(2)); // Ensure price with VAT has 2 decimal places
  };

  const calculateWithoutVAT = (withVAT, vatPercent) => {
    const noVAT = withVAT / (1 + vatPercent / 100);
    const vatAmount = withVAT - noVAT;
    setVatValue(vatAmount.toFixed(2)); // Ensure VAT value has 2 decimal places
    setWithoutVAT(noVAT.toFixed(2)); // Ensure price without VAT has 2 decimal places
  };

  return (
    <div className="container-fluid-xs">
      <Header />

      {/* Input for price with VAT */}
      <VATInput
        label="Τιμή με ΦΠΑ:"
        id="with-vat"
        value={withVAT}
        onChange={handleWithVATChange}
      />

      {/* Input for price without VAT */}
      <VATInput
        label="Τιμή χωρίς ΦΠΑ:"
        id="with-no-vat"
        value={withoutVAT}
        onChange={handleWithoutVATChange}
        step="0.01"
      />

      {/* Display the calculated VAT value */}
      <VATInput
        label="ΦΠΑ"
        id="vat-value"
        value={vatValue}
        disabled={true}
      />

      {/* VAT category selector */}
      <VATSelector value={vatCategory} onChange={handleVATCategoryChange} />

      <Footer />
    </div>
  );
}

export default App;
