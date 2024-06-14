import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialState: T) => {

  const [formData, setFormData] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const reset = () => {
    setFormData({ ...initialState });
  };

  const isValidEmail = (email: string) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  return {
    ...formData,
    formData,
    isValidEmail,
    onChange,
    reset
  };

};
