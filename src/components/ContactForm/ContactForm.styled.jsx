import styled from '@emotion/styled';
import { Form, Field } from 'formik';
export const StyledForm = styled(Form)`
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  border: solid 2px;
  background-color: lightyellow;
`;

export const StyledInput = styled(Field)`
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
