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
    setVatValue(vatAmount.toFixed(2));
    setWithVAT((noVAT + vatAmount).toFixed(2)); 
  };

  const calculateWithoutVAT = (withVAT, vatPercent) => {
    const noVAT = withVAT / (1 + vatPercent / 100);
    const vatAmount = withVAT - noVAT;
    setVatValue(vatAmount.toFixed(2));
    setWithoutVAT(noVAT.toFixed(2));
  };

  return (
    <div className="container-fluid">
      <Header />
  
      <VATInput
        label="Τιμή με ΦΠΑ:"
        id="with-vat"
        value={withVAT}
        onChange={handleWithVATChange}
      />
  
      <VATInput
        label="Τιμή χωρίς ΦΠΑ:"
        id="with-no-vat"
        value={withoutVAT}
        onChange={handleWithoutVATChange}
        step="0.01"
      />
  
      <VATInput
        label="ΦΠΑ"
        id="vat-value"
        value={vatValue}
        disabled={true}
      />
  
      <VATSelector value={vatCategory} onChange={handleVATCategoryChange} />
  
      <Footer />
    </div>
  );
  
}

export default App;
