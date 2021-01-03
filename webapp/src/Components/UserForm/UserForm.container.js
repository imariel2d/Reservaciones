import React, { useState } from 'react';
import moment from 'moment';

import { checkForEmptyUserProperties, validateEmail } from '../../utils/validateUser';

import UserFormComponent from './UserForm.component';

const UserFormContainer = () => {
  const [user, setUser] = useState({
    name: '',
    paternalSurname: '',
    maternalSurname: '',
    dateOfBirth: moment().format(),
    age: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    paternalSurname: false,
    maternalSurname: false,
    dateOfBirth: false,
    age: false,
    email: false,
    phone: false,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { email } = user;

    const emptyPropertiesErrors = checkForEmptyUserProperties(user);
    const isEmailValid = validateEmail(email);

    setErrors({ ...emptyPropertiesErrors, email: !isEmailValid });
  };

  return (
    <UserFormComponent
      handleSubmitForm={handleSubmitForm}
      user={user}
      setUser={setUser}
      errors={errors}
    />
  );
};

export default UserFormContainer;