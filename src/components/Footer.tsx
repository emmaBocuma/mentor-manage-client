import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background.medium};
`;

const Nav = styled.nav``;
const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  align-items: center;
  padding: 16px 0 16px;

  li {
    display: block;
    margin-left: 30px;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.extraLight};

    &:first-child {
      margin-left: 0;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text.extraLight};

      &:hover {
        color: ${({ theme }) => theme.colors.text.accent};
      }
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Nav>
        <NavItems>
          <li>&copy; Mentor Manage</li>
          <li>Contact</li>
          <li>Privacy &amp; terms</li>
        </NavItems>
      </Nav>
    </Wrapper>
  );
};

export default Footer;
