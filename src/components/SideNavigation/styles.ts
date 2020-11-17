import styled, { css } from 'styled-components';

export const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--color-default);
  width: 25%;
  height: 100%;
  color: white;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  width: 95%;
  border-bottom: 2px solid #ccc;
`;
export const Topico = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  &:first {
    margin-top: 15px;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 20px;

    > svg {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }

    > h2 {
      font-weight: bold;
      line-height: 25px;
    }
    > ul {
      list-style-type: circle;
    }
  }
`;

interface SubTopicoProps {
  isSelect?: boolean;
}
export const SubTopico = styled.li<SubTopicoProps>`
  font-size: 20px;
  margin-left: 50px;
  list-style: none;
  margin-bottom: 3px;
  margin-top: 3px;

  ${props =>
    props.isSelect &&
    css`
      list-style: circle;
      color: orange;
    `};
`;
