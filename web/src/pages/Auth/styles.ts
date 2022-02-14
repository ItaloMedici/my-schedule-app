import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
  margin: 0 var(--horizontalPadding);
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Card = styled.div`
  background: var(--white);

  width: 100%;
  height: 60vh;

  border-radius: 10px;
  padding: 24px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  h1 {
    margin-bottom: 10px;
  }

  .form {
    margin: 20px 0;
    display: grid;
    flex-direction: column;
    gap: 20px;
  }

  a {
    color: var(--gray-200);
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
    color: var(--primary);
    
  }

  @media (min-width: 500px) {
    width: 60%;
  }
`;