import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@monaco-editor/react';

import { useMutation  } from '@apollo/client';
import { mutations } from '../../Mutations';
import { useNavigate } from 'react-router-dom';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  margin: 40px;
  min-height: 100vh; /* Ensure the container covers the entire viewport height */
  width: 100vw; /* Ensure the container covers the entire viewport width */
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ensure the container covers the entire viewport height */
  width: 50%; /* Take 50% width */
  gap: 1rem;
  padding: 20px;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
`


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh; /* Ensure the container covers the entire viewport height */
  width: 50%; /* Adjust width as needed */
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 20px
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 20px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 20px;
`;


const SubmitButton = styled.button`
  padding: 8px 16px;
  font-size: 20px;
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

const TextArea = styled.textarea`
  height: 200px;
  padding: 10px;
  font-size: 20px;  
`;





const InputForm = () => {


const programmingLanguages = [
  "select a Language",
  "javaScript",
  "python",
  "Java",
  "C++",
  "Ruby",
  "Swift",
  "Go",
  "TypeScript",
  "PHP",
  "Rust"
];

const frameworks = [ "select a framework", "React", "Angular", "Vue.js", "Node.js", "Django", "Flask", "Spring Boot", "Ruby on Rails", "Laravel", "SwiftUI", "Express.js", "NestJS", "Gin", "Symfony", "Qt", "Rocket", "Echo", "Hibernate", "Boost", "Actix"];

  const history = useNavigate();
  

  const [isPaid, setIsPaid] = useState(false);

  const [createComponent] = useMutation(mutations.CREATE_COMPONENT);
  
  const [formData, setFormData] = useState({
    name: '',
    lang: '',
    framework:'',
    paid: false,
    price: 0,
    description :  '',
    code:  '',
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
    try {
      console.log(formData)
      const result = createComponent({ variables: formData });
      console.log(result);
      history('/dashboard');
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
      <CenteredContainer>   
      <FormContainer onSubmit={handleSubmit}>
        <h1>Add Component</h1>
        <DataContainer>
          <Label htmlFor="name">Name:</Label>
          <InputField type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

          <Label htmlFor="language">Code Language:</Label>
          <Select id="language" name="language" onChange={(e) => setFormData({ ...formData, lang: e.target.value })}>
            <option value="select a Language">select a Language</option>
            {programmingLanguages.map((lang,index) => {
              return(<option key={index} value={lang}>
                {lang}
              </option>)
            })}
          </Select>

          <Label htmlFor="framework">Framework:</Label>
          <Select id="framework" name="framework"  onChange={(event) => setFormData({ ...formData, framework: event.target.value })}>
            <option value="select a framework">select a framework</option>
            {frameworks.map((framework,index) => {
              return(<option key={index} value={framework}>
                {framework}
              </option>)
            })}
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
        <Label htmlFor="description">Description:</Label>  
        <TextArea value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })} />  
        </DataContainer>
       
      </FormContainer>
      <TextContainer>
          <Label htmlFor="code">Code:</Label>
          <Editor 
                height= "85vh"
                theme='vs-dark'
                defaultLanguage={formData==null ? "javascript" : formData.lang}
                defaultValue="// Write your code here"
                value={formData.code}
                onChange={(value) => setFormData({ ...formData, code: value })}
          />
 
          <SubmitButton type="submit" onClick = {handleSubmit}>Submit</SubmitButton>
        </TextContainer>
      </CenteredContainer>
  );
};

export  {InputForm};
