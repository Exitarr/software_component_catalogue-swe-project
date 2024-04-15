import { useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Editor } from '@monaco-editor/react';

import { useQuery } from '@apollo/client';
import { queries } from '../../Queries';


const Section = styled.section`
  display: flex;
  flex-direction: row;
  height: 87vh; /* Ensure the container covers the entire viewport height */
  background-color: #f0f7ff; /* Blue background */
  padding: 40px;
  width: 100%;
  border-radius: 8px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;

const Heading = styled.h1`
    font-size: 4rem;
`

export default function CompPage( props ) {
    const { id } = useParams();
    const { data , loading , error } = useQuery(queries.GET_COMPONENT_BYID, {
        variables : { id }, 
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;

    const {  name, lang, framework, paid, price, description , code  } = data.getComponentbyId;

    console.log(data.getComponentbyId)

    return(
        <Section>
            <DetailContainer>
                <Heading>{name}</Heading>
                <span>
                   {lang} | {framework}
                </span>
                <span>Price : {paid ? price : 'free'}</span>
                <p>
                    {description}
                </p>
            </DetailContainer>
            <Editor 
                height= "75vh"
                width= "50%"
                theme='vs-dark'
                defaultLanguage="javascript"
                defaultValue={code}
            />

            
        </Section>
    )
}