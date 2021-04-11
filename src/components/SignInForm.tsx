import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from './form/TextInput';
import SubmitButton from './form/SubmitButton';
import useForm from '../hooks/useForm';
import { IAuth } from '../auth';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background.default};
  box-shadow: 0 0 20px rgb(6 38 63 / 15%);
  border-radius: 15px;
  min-width: 400px;
  margin: 30px;
  min-height: 400px;
  flex: display;
  justify-content: center;
`;

const ContainerWrapper = styled.div`
  padding: 0 30px;
`;

const Heading = styled.h3`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text.highLightLabel};
  padding: 0;
  margin: 0 0 20px;
  border-radius: 15px 15px 0 0;
  padding: 20px;
  text-align: center;
`;

const AuthError = styled.p`
  font-size: 0.7em;
  color: ${({ theme }) => theme.colors.error};
  margin: 0;
  padding: 0;
`;

const Aside = styled.aside`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.text.default};
  margin-left: 30px;
`;

const StyledSubmitButton = styled(SubmitButton)`
  margin-top: 40px;
  width: 100%;
`;

type SignInFormProps = {
  signInHandler: (email: string, password: string) => Promise<IAuth>;
  successHandler: () => void;
};

const SignInForm: React.FC<SignInFormProps> = ({
  signInHandler,
  successHandler,
}) => {
  const { data, errors, handleChange, handleSubmit } = useForm<{
    password: string;
    email: string;
  }>({
    validations: {
      email: {
        required: {
          value: true,
          message: 'Please enter an email address',
        },
      },
      password: {
        required: {
          value: true,
          message: 'Please enter a password',
        },
      },
    },
    onSubmit: async () => {
      const result = await signInHandler(data.email, data.password);
      if (result?.error) {
        return setAuthError(result.error.message);
      }
      successHandler();
    },
  });

  const [authError, setAuthError] = useState('');
  return (
    <Wrapper>
      <Card>
        <Heading>Sign in to your account</Heading>
        <ContainerWrapper>
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <TextInput
              type="text"
              name="email"
              value={data.email || ''}
              handleChange={handleChange('email')}
              label="Email"
              error={errors.email}
            />
            <TextInput
              type="password"
              name="password"
              value={data.password || ''}
              handleChange={handleChange('password')}
              label="Password"
              error={errors.password}
            />
            <StyledSubmitButton>Sign In</StyledSubmitButton>
            <AuthError data-testid="auth-error">{authError}</AuthError>
          </form>
        </ContainerWrapper>
      </Card>
      <Aside>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </Aside>
    </Wrapper>
  );
};

export default SignInForm;
