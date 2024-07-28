import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EFEEF8;
`;
export const AppBox = styled.div`
  height: 50vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 30px 20px;
  background-color: #FAFAFB;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ///font
  h3 {
    color: var(--500, #6053b9);
    font-family: "Public Sans";
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 114.286% */
  }
`;
export const Text = styled.div`
color: var(--400, #A098D5);
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 114.286% */
`;
export const ModalTitle = styled.div`
    color: var(--500, #6053b9);
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 114.286% */
`;

export const StyledInput = styled.input`
  margin-top: 15px;
  width: 100%;
  padding: 8px 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box; /* Ensure padding does not affect width */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  color: #6053B9;

  &::placeholder {
    color: #A098D5;
    font-style: italic;
  }

  &:focus {
    border-color: #A098D5; /* Change border color on focus */
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25); /* Add shadow on focus */
    outline: none; /* Remove default outline */
  }
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: end;
align-items: center;
gap: 10px;
margin-top: 15px;
`

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  outline: none;
  display: inline-block;
  margin: 5px;
  background: #E3FBE3;
  color: #3cb047;
  
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow */
    background: #cafacf;
  }
`;

export const NeedTodo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 12px;
width: 100%;
margin-top: 10px;
border-radius: 8px;
background-color: #EFEEF8;
//
color: var(--500, #6053B9);
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
`
