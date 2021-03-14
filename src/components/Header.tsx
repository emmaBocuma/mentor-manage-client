import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../assets/logo.svg';

const Wrapper = styled.header`
  position: sticky;
`;
const Menu = styled.div`
  padding: 0 20px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  margin-bottom: 30px;
`;
const Logo = styled.div`
  width: 200px;
`;
const Nav = styled.nav``;
const NavItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  align-items: center;

  li {
    display: block;
    margin-left: 30px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text.light};
    }

    &.signup {
      background-color: ${({ theme }) => theme.colors.highlight};
      border-radius: 20px;
      padding: 10px 20px;

      a {
        color: ${({ theme }) => theme.colors.text.highLightLabel};
      }
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Menu>
        <Link to="/">
          <Logo>
            <LogoSVG />
          </Logo>
        </Link>
        <Nav>
          <NavItems>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/mentors">Mentors</Link>
            </li>
            <li>
              <Link to="/mentees">Mentees</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li className="signup">
              <Link to="/signup">Get started</Link>
            </li>
          </NavItems>
        </Nav>
      </Menu>
    </Wrapper>
  );
};

export default Header;
