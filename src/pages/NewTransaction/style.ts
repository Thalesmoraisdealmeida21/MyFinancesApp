import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  padding: 40px 20px;
`;

export const CardContainer = styled.section`
  background: #fff;
  box-shadow: 10em;
  align-items: center;
  margin: 0 auto;
  margin-left: 20vw;
  margin-right: 20vw;
  padding: 60px;
  display: flex;

  form {
    align-items: center;
    margin: 0 auto;
  }

  .groupForm {
    display: flex;
    flex-direction: row;
  }
  select {
    width: 100%;
    height: 60px;
    background: transparent;
    padding: 18px;
    margin-left: 0;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 16px;
    color: #7d7975;
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 60px;
    border: silver solid 1px;
    padding: 30px;
    margin-left: 0;
    margin-top: 20px;
    border-radius: 5px;
  }

  .valueInput {
    &.outcome {
      color: red;
      border: 1px solid red;
    }

    &.income {
      color: green;
      border: 1px solid green;
    }
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }
}
    -webkit-appearance: none;
  }

  .buttonGroup {
    width: 100%;
    display: flex;

    button {
      margin-left: auto;
      margin-top: 20px;
      width: 200px;
      border: transparent;
      border-radius: 5px;
      background: #ff872c;
      color: white;
      height: 60px;
    }
  }
`;
