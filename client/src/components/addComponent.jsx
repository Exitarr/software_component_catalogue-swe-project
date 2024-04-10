import React, { useState } from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensure the container covers the entire viewport height */
`;

const FormContainer = styled.div`
  display: grid;
  gap: 1rem;
  width: 500px; /* Adjust width as needed */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  display: grid;
  gap: 1rem;
  width: 500px; /* Adjust width as needed */
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 14px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  height: 150px;
  padding: 10px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  width: 100px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;


const InputForm = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    language: '',
    framework: '',
    paid: false,
    price: '',
    code: '',
  });

  const handlePaidChange = (event) => {
    setIsPaid(event.target.value === 'paid');
    setFormData({ ...formData, paid: event.target.value === 'paid' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <CenteredContainer>
      <h1>Add Component</h1>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <InputField type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

        <Label htmlFor="language">Code Language:</Label>
        <Select id="language" name="language" value={formData.language} onChange={handleInputChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </Select>

        <Label htmlFor="framework">Framework:</Label>
        <Select id="framework" name="framework" value={formData.framework} onChange={handleInputChange}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
        </Select>

        <div>
          <Label htmlFor="paid">Paid:</Label>
          <label>
            <input
              type="radio"
              id="paid"
              name="payment"
              value="paid"
              checked={isPaid}
              onChange={handlePaidChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              id="unpaid"
              name="payment"
              value="unpaid"
              checked={!isPaid}
              onChange={handlePaidChange}
            />
            No
          </label>
        </div>

        {isPaid && (
          <div>
            <Label htmlFor="price">Price: </Label>
            <InputField type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} />
          </div>
        )}

        <TextContainer>
          <Label htmlFor="code">Code:</Label>
          <TextArea id="code" name="code" value={formData.code} onChange={handleInputChange} />
 
          <SubmitButton type="submit" onClick = {handleSubmit}>Submit</SubmitButton>
        </TextContainer>
      </FormContainer>
    </CenteredContainer>
  );
};

export default InputForm;
