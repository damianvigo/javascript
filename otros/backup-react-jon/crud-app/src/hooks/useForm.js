import { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {};

  const handleBlur = (e) => {};

  const handleSubmit = (e) => {};

  return {
    // form: form,
    // errors: errors,
    // loading: loading,
    // response: response,
    // handleChange: handleChange,
    // handleBlur: handleBlur,
    // handleSubmit: handleSubmit
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
