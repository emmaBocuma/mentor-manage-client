import PropTypes from 'prop-types';
import styled from 'styled-components';

const GroupContainer = styled.div`
  position: relative;
  margin: 35px 0 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

const TextInputContainer = styled.input`
  background: none;
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.default};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.default};
  margin: 25px 0 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    top: -14px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.light};
  }
  &.error {
    border-bottom: 1px solid red;
  }
`;

const TextInputLabel = styled.label`
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 8px;
  transition: 300ms ease all;
  &.shrink {
    top: -15px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const Error = styled.p`
  font-size: 0.8rem;
  color: red;
  margin: 10px 0;
  padding: 0;
`;

interface ITextInput {
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  label: string;
  value: string;
  type: string;
  name: string;
  required?: boolean;
  error?: string;
}

const TextInput = ({
  handleChange,
  label,
  value,
  required,
  name,
  error,
}: ITextInput) => (
  <GroupContainer>
    <TextInputContainer
      onChange={handleChange}
      name={name}
      value={value}
      required={required}
      className={error ? 'error' : ''}
    />
    {error ? <Error>{error}</Error> : null}
    {label ? (
      <TextInputLabel className={value.length ? 'shrink' : ''}>
        {label}
      </TextInputLabel>
    ) : null}
  </GroupContainer>
);

TextInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
