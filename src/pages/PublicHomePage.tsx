import styled from 'styled-components';

const Wrapper = styled.main`
  flex: 1;
  background: ${(props) =>
    `linear-gradient(180deg, ${props.theme.colors.background.main}  0%, ${props.theme.colors.background.alt} 47%)`};
`;

const Section = styled.section`
  max-width: ${(props) => `${props.theme.widths.default}px`};
  margin: auto;
`;

const PublicHomePage = () => {
  return (
    <Wrapper>
      <Section>
        <h1>Welcome to Mentor Manage</h1>
      </Section>
    </Wrapper>
  );
};

export default PublicHomePage;
