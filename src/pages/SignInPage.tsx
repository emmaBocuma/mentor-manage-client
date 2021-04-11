import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import { signInWithEmailAndPassword } from '../auth';

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
const SignInPage = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Section>
        <FormContainer>
          <SignInForm
            signInHandler={signInWithEmailAndPassword}
            successHandler={() => history.push('/dashboard')}
          />
        </FormContainer>
      </Section>
    </Wrapper>
  );
};

export default SignInPage;
