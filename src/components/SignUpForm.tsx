import styled from 'styled-components';
import TextInput from './form/TextInput';
import SubmitButton from './form/SubmitButton';
import { device } from '../config/themes';
import useForm from '../hooks/useForm';
import { UserBasic } from '../interfaces/common';
import { createUserWithEmailAndPassword } from '../auth';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
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
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text.highLightLabel};
  padding: 0;
  margin: 0 0 20px;
  border-radius: 15px 15px 0 0;
  padding: 20px;
  text-align: center;
`;

const SignUpForm = () => {
  const { data, errors, handleChange, handleSubmit } = useForm<
    { password: string; passwordConfirm: string } & UserBasic
  >({
    validations: {
      email: {
        required: {
          value: true,
          message: 'Please enter an email address',
        },
      },
      firstName: {
        required: {
          value: true,
          message: 'Please enter your first name',
        },
      },
      lastName: {
        required: {
          value: true,
          message: 'Please enter your last name',
        },
      },
      password: {
        required: {
          value: true,
          message: 'Please enter a password',
        },
      },
      passwordConfirm: {
        custom: {
          isValid: (value): boolean => {
            console.log('check', data.password === value);
            return data.password === value;
          },
          message: 'Passwords must match',
        },
      },
    },
    onSubmit: () => {
      createUserWithEmailAndPassword(data.email, data.password);
    },
  });
  return (
    <Wrapper>
      <Card>
        <Heading>Sign up to get involved</Heading>
        <ContainerWrapper>
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <TextInput
              type="email"
              name="email"
              value={data.email || ''}
              handleChange={handleChange('email')}
              label="Email"
              error={errors.email}
            />
            <TextInput
              type="text"
              name="firstName"
              value={data.firstName || ''}
              handleChange={handleChange('firstName')}
              label="First Name"
              error={errors.firstName}
            />
            <TextInput
              type="text"
              name="lastName"
              value={data.lastName || ''}
              handleChange={handleChange('lastName')}
              label="Last Name"
              error={errors.lastName}
            />
            <TextInput
              type="password"
              name="password"
              value={data.password || ''}
              handleChange={handleChange('password')}
              label="Password"
              error={errors.password}
            />
            <TextInput
              type="password"
              name="passwordConfirm"
              value={data.passwordConfirm || ''}
              handleChange={handleChange('passwordConfirm')}
              label="Confirm password"
              error={errors.passwordConfirm}
            />
            <SubmitButton>Sign Up</SubmitButton>
          </form>
        </ContainerWrapper>
      </Card>
    </Wrapper>
  );
};

export default SignUpForm;
