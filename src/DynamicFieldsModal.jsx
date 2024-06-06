import React, { useState } from 'react';
import Modal from 'react-modal';

const DynamicFieldsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fields, setFields] = useState([{ name: '', email: '' }]);

  const handleInputChange = (index, event) => {
    const newFields = [...fields];
    newFields[index][event.target.name] = event.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { name: '', email: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
    
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h2>Dynamic Input Fields</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <input
                type="text"
                name="name"
                value={field.name}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={field.email}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Email"
              />
              <button type="button" onClick={() => handleRemoveField(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddField}>Add Field</button>
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default DynamicFieldsModal;
