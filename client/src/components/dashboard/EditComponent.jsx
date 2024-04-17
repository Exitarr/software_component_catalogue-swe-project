import React, { useState , useEffect } from 'react';
import styled from 'styled-components';
import { Editor } from '@monaco-editor/react';
import { useParams } from 'react-router-dom';

import { useMutation , useQuery } from '@apollo/client';
import { queries } from '../../Queries';
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





const EditForm = ({ isEdit }) => {


  const programmingLanguages = [
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

const frameworks = [ "React", "Angular", "Vue.js", "Node.js", "Django", "Flask", "Spring Boot", "Ruby on Rails", "Laravel", "SwiftUI", "Express.js", "NestJS", "Gin", "Symfony", "Qt", "Rocket", "Echo", "Hibernate", "Boost", "Actix"];

  const history = useNavigate();
  const { id } = useParams();
  const [isPaid, setIsPaid] = useState(false);
  const [updateComponent] = useMutation(mutations.UPDATE_COMPONENT);
  
  const [formData, setFormData] = useState({
    id: id,
    name: '',
    lang: '',
    framework: '',
    paid: false,
    price: 0,
    description: '',
    code: '',
  });

  const { data , loading , error } = useQuery(queries.GET_COMPONENT_BYID, {
    variables : { id }, 
  });

  useEffect(() => {
    if (data) {
      const { name, lang, framework, paid, price, description, code } = data.getComponentbyId;
      setFormData({ id, name, lang, framework, paid, price, description, code });
    }
  }, [data]);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  


  const handlePaidChange = (event) => {
    setIsPaid(event.target.value === 'paid');
    setFormData({ ...formData, paid: event.target.value === 'paid' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData)
      const result = await updateComponent({ variables: formData });
      console.log(result);
      history('/dashboard');
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <CenteredContainer>   
      <FormContainer onSubmit={handleSubmit}>
        <h1>{isEdit ? 'Edit Component' : 'Add Component'}</h1>
        <DataContainer>
          <Label htmlFor="name">Name:</Label>
          <InputField type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

          <Label htmlFor="language">Code Language:</Label>
          <Select id="language" name="language" value={formData.lang} onChange={(e) => setFormData({ ...formData, lang: e.target.value })}>
            <option value="select a Language">select a Language</option>
            {programmingLanguages.map((nlang,index) => {
              return(<option key={index} value={nlang}>
                {nlang}
              </option>)
            })}
          </Select>

          <Label htmlFor="framework">Framework:</Label>
          <Select id="framework" name="framework" value={formData.framework}  onChange={(event) => setFormData({ ...formData, framework: event.target.value })}>
            <option value="select a framework">select a framework</option>
            {frameworks.map((nframework,index) => {
              return(<option key={index} value={nframework}>
                {nframework}
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
                checked={formData.paid}
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
                checked={!formData.paid}
                onChange={handlePaidChange}
              />
              No
            </label>
          </div>

          {formData.paid && (
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
                defaultLanguage={formData.lang}
                defaultValue="// Write your code here"
                value={formData.code}
                onChange={(value) => setFormData({ ...formData, code: value })}
          />
 
          <SubmitButton type="submit" onClick = {handleSubmit}>Submit</SubmitButton>
        </TextContainer>
      </CenteredContainer>
  );
};

export  {EditForm};
