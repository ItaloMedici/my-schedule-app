import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Main  = styled.div`
  margin: 0 var(--horizontalPadding);

  display: flex;
  flex-direction: column;

  > :nth-child(2) {
    display: none
  }

  @media (max-width: 500px) {
    > :nth-child(2) {
      display: inline-flex;
      margin-bottom: 10px;
    }
  }
  
`;

export const Header  = styled.div`
  display: flex;
  align-items: center;

  padding: 40px 0 10px;
  
  justify-content: flex-end;
  gap: 18px;


  h1 {
    flex: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 18px;

  > :nth-child(3) {
    display: none
  }

  @media (max-width: 700px) {  
    > :nth-child(2) {
      display: none
    }

    > :nth-child(3) {
      display: inline-flex;
    }
  }

  @media (max-width: 500px) {
    > :nth-child(1) {
      display: none
    }
  }
`;
