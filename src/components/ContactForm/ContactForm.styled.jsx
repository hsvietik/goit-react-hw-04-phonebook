import styled from '@emotion/styled';

export const StyledForm = styled.form`
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  border: solid 2px;
  background-color: lightyellow;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  &:focus,
  &:hover {
    outline: solid 2px lightskyblue;
  }
`;
export const FormButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border-radius: 6px;
  font-size: 16px;
  &:focus,
  &:hover {
    background-color: lightskyblue;
  }
`;
export const ErrorMessage = styled.p`
  margin: 0px;
  padding: 0px;
`;
