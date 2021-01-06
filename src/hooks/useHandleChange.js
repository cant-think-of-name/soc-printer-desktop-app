import React from 'react';

export default function useHandleChange(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  const handleChange = (event) => setValue(event.target.value);

  return [value, handleChange];
}
