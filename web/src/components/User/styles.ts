import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: var(--gray-800);
    font-size: 18px;
  }
`;

export const UserImage = styled.div`
  width: 27px;
  height: 27px;
  background: url("https://github.com/ItaloMedici.png");
  background-size: cover;
  border-radius: 50%;
  margin-right: 20px;
`;