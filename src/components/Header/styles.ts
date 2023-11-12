import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem 0 1.5rem;

  h1 {
    font-family: omnium,sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 3rem;
    color: white;
  }

  h4 {
    padding: 0.25rem 0 0.25rem;
    font-family: poppins,sans-serif;
    color: rgb(0, 204, 255);
    font-weight: 700;
    font-style: italic;
    animation: changes-text-color 10s cubic-bezier(.17,.67,.83,.67) infinite;
  }
`
