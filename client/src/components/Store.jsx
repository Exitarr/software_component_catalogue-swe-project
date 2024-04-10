import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 87vh; /* Ensure the container covers the entire viewport height */
  gap: 1rem;
  background-color: #f0f7ff; /* Blue background */
  padding: 20px;
  border-radius: 8px;
`;

const SearchBar = styled.input`
  padding: 15px;
  font-size: 18px; /* Larger font size */
  width: 80%; /* Take 80% width */
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 80%; /* Take 80% width */
`;

const MenuButton = styled.select`
  padding: 15px;
  font-size: 16px; /* Larger font size */
  flex: 1; /* Take equal width */
`;

const CheckboxLabel = styled.label`
  font-size: 16px; /* Larger font size */
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  margin-right: 5px;
`;

const SectionComponent = () => {
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

  return (
      <Section>
        <SearchBar type="text" placeholder="Search..." />
        <ControlsContainer>
            <MenuButton value={language} onChange={handleLanguageChange}>
              <option value="">Select Language</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </MenuButton>
            <MenuButton value={framework} onChange={handleFrameworkChange}>
              <option value="">Select Framework</option>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue.js</option>
            </MenuButton>
            <MenuButton value={paidStatus} onChange={handlePaidStatusChange}>
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="free">Free</option>
            </MenuButton>
        </ControlsContainer>
      </Section>
  );
};

export default SectionComponent;
