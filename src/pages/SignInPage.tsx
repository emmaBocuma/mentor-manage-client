import styled from 'styled-components';
import SignInForm from '../components/SignInForm';

const Wrapper = styled.main``;

const Section = styled.section`
  background: linear-gradient(180deg, #ffffff 0%, #f1f5fa 47%);
`;

const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;
const SignInPage = () => {
  return (
    <Wrapper>
      <Section>
        <FormContainer>
          <SignInForm />
        </FormContainer>
      </Section>
    </Wrapper>
  );
};

export default SignInPage;
