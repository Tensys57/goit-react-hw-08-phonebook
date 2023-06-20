import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
  FormStyled,
  LabelStyled,
  InputStyled,
  BtnStyled,
} from './ContactForm.styled';
import { addContact } from 'redux/contactsOperations';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };
  const { name, number } = form;
  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.contacts.some(el => el.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact(form));
    setForm({ name: '', number: '' });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>
        Name
        <InputStyled
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </LabelStyled>
      <LabelStyled>
        Number
        <InputStyled
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleChange}
        />
        <BtnStyled type="submit">Add new contact</BtnStyled>
      </LabelStyled>
    </FormStyled>
  );
};

export default ContactForm;
