import styled from 'styled-components';
import SignUpForm from '../components/SignUpForm';

const Wrapper = styled.main`
  flex: 1;
  background: ${(props) =>
    `linear-gradient(180deg, ${props.theme.colors.background.main}  0%, ${props.theme.colors.background.alt} 47%)`};
`;

const Section = styled.section``;

const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;
const SignupPage = () => {
  return (
    <Wrapper>
      <Section>
        <FormContainer>
          <SignUpForm />
        </FormContainer>
      </Section>
    </Wrapper>
  );
};

export default SignupPage;
