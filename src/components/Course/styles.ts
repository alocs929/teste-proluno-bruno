import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #7c6cf0;
  border-radius: 10px;
  padding: 10px;
  width: 30%;
  margin-bottom: 20px;
  transition: transform 0.2s;
  transform: 0.2;

  &:hover {
    transform: translateX(5px);
    background-color: #5e50bf;
  }
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    > svg {
      color: white;
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    > h1 {
      font-size: 14px;
      color: white;
    }
  }

  > svg {
    color: white;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;
