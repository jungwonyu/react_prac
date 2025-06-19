import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export default function Input({ type, placeholder, value, onChange, onKeyDown}) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}