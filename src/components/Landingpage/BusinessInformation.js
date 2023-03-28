import React, { useState } from 'react';

const BusinessInformation = ({ onNext }) => {
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [products, setProducts] = useState('');
  const [contacts, setContacts] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      <h3>Business Information</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name</label>
        <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

        <label htmlFor="industry">Industry</label>
        <input type="text" id="industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />

        <label htmlFor="products">Products</label>
        <input type="text" id="products" value={products} onChange={(e) => setProducts(e.target.value)} />

        <label htmlFor="contacts">Contacts</label>
        <input type="text" id="contacts" value={contacts} onChange={(e) => setContacts(e.target.value)} />

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default BusinessInformation;
