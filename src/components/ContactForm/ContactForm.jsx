import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { StyledForm, StyledInput, FormButton } from './ContactForm.styled.jsx';

const initialValues = { name: '', number: '' };

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export function ContactForm({ addContact }) {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    addContact(name, number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <StyledInput type="text" name="name" id="name" />
        <ErrorMessage name="name" />
        <label htmlFor="number">Number</label>
        <StyledInput type="tel" name="number" id="number" />
        <ErrorMessage name="number" />
        <FormButton type="submit">Add contact</FormButton>
      </StyledForm>
    </Formik>
  );
}

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };
