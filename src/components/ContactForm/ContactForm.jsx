import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledInput,
  FormButton,
  ErrorMessage,
} from './ContactForm.styled.jsx';

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Name is required'),
    number: yup
      .string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Number is required'),
  })
  .required();

export function ContactForm({ addContact }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: '', number: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, number }) => {
    addContact(name, number);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <StyledInput {...register('name')} type="text" id="name" />
      <ErrorMessage>{errors.name?.message}</ErrorMessage>
      <label htmlFor="number">Number</label>
      <StyledInput {...register('number')} type="tel" id="number" />
      <ErrorMessage>{errors.number?.message}</ErrorMessage>
      <FormButton type="submit">Add contact</FormButton>
    </StyledForm>
  );
}

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };
