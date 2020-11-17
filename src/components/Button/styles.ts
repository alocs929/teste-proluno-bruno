import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--color-default);
  /* height: 45px; */
  border-radius: 5px;
  border: 0;
  padding: 10px 8px;
  color: white;

  transition: background-color 0.2s;
  font-weight: normal;
  /* font-size: 16px; */
  > svg {
    margin-right: 5px;
  }
`;
