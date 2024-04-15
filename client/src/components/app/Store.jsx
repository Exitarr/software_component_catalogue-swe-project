import React, { useState } from 'react';
import styled from 'styled-components';
import CompCard from './CompCard';

import { useQuery } from '@apollo/client';
import { queries } from '../../Queries';

const Section =  styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 88vh; /* Ensure the container covers the entire viewport height */
  gap: 1rem;
  background-color: #f0f7ff; /* Blue background */
  padding: 20px;
  border-radius: 8px;
  width: 100%;
`;



const ControlsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 85%; /* Take 80% width */
`;

const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  flex-dirextion: row;
  gap: 1.5rem;
  padding: 0;
`


const CardContainer = styled.div`
  display: flex;
  margin: 20px;
  width: 85%; /* Take 80% width */
`;
 

const MenuButton = styled.select`
  padding: 15px;
  font-size: 16px; /* Larger font size */
  flex: 1; /* Take equal width */
`;

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Swift",
  "Go",
  "TypeScript",
  "PHP",
  "Rust"
];

const frameworks = [  "React", "Angular", "Vue.js", "Node.js", "Django", "Flask", "Spring Boot", "Ruby on Rails", "Laravel", "SwiftUI", "Express.js", "NestJS", "Gin", "Symfony", "Qt", "Rocket", "Echo", "Hibernate", "Boost", "Actix"];

const SectionComponent = ({edit}) => {
  const [language, setLanguage] = useState('');
  const [framework, setFramework] = useState('');
  const [paidStatus, setPaidStatus] = useState('all'); // Default to 'all'

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleFrameworkChange = (event) => {
    setFramework(event.target.value);
  };

  const handlePaidStatusChange = (event) => {
    setPaidStatus(event.target.value);
  };

  const { loading, error, data } = useQuery(queries.GET_COMPONENTS_ON_REQUEST_QUERY,{
    variables: { lang: language, framework , paid: paidStatus === 'all' ? false : paidStatus === 'paid' ? true : false }
  });

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>

  console.log(data);

  const components  = data.getComponentsOnrequest;


  return (
      <Section>
        <ControlsContainer>
            <MenuButton value={language} onChange={handleLanguageChange}>
              <option value="">Select Language</option>
              {programmingLanguages.map((lang,index) => {
                return <option key={index} value={lang}>{lang}</option>
              })}
            </MenuButton>
            <MenuButton value={framework} onChange={handleFrameworkChange}>
              <option value="">Select Framework</option>
              {frameworks.map((framework,index) => {
                return <option key={index} value={framework}>{framework}</option>
              })}
            </MenuButton>
            <MenuButton value={paidStatus} onChange={handlePaidStatusChange}>
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="free">Free</option>
            </MenuButton>
        </ControlsContainer>
        <CardContainer>
          <ListContainer>
            {loading && <p>Loading...</p>}
            {error && <p>Error: ${error.message}</p>}
            {data && components.map((comp) => {
              return <li><CompCard key={comp.id} comp = {comp}/></li>
            })}
          </ListContainer>
          
        </CardContainer>
      </Section>
  );
};

export default SectionComponent;
