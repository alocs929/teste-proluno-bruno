import styled, { css } from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  background-color: #f1f1f1;
`;

interface HeaderProps {
  isRedeSelected: boolean;
}
export const Header = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 95%;
  margin-bottom: 35px;

  > div.title {
    /* position: absolute; */
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ccc;

    > h3 {
      padding: 20px;
      border-bottom: 2px solid var(--color-default);
    }
  }

  > div.search {
    margin-top: 15px;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div.input {
      background-color: white;
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      border: 1px solid #ccc;
      padding: 10px;
      margin-right: 20px;

      > svg {
        margin-left: 5px;
        margin-right: 10px;
      }

      > input {
        background: transparent;
        flex: 1;
        border-style: none;
      }
    }

    div.selectSearch {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      padding: 0 20px;

      > button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-style: none;
        > svg {
          margin-right: 5px;
        }

        &.buttonFrist {
          padding: 10px;
          border-radius: 5px 0 0 5px;
        }
        &.buttonSecond {
          padding: 10px;
          border-radius: 0 5px 5px 0;
        }
        ${props =>
          props.isRedeSelected
            ? css`
                &.buttonFrist {
                  color: white;
                  background-color: #6655e0;
                }
              `
            : css`
                &.buttonSecond {
                  color: white;
                  background-color: #6655e0;
                }
              `}
      }
    }
  }
`;

export const ListCourses = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 95%;
  max-height: 100%;
`;

export const NoCourses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  > svg {
    color: #595959;
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
  > h2 {
    color: #595959;
    margin-bottom: 20px;
  }

  > p {
    color: #595959;
    max-width: 650px;
    text-align: center;
    margin-bottom: 40px;
    > a {
      text-decoration: none;
      color: #204869;
    }
  }
`;

export const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;

  > input {
    width: 100%;
    padding: 5px;
  }
  > p {
    font-size: 12px;
    color: gray;
    /* font-size: 5px; */
  }
  > footer {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    > button + button {
      margin-left: 10px;
    }
    > button.buttonback {
      color: black;
      background: none;
    }
  }
`;
