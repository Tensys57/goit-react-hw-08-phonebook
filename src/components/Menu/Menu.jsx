import { selectIsAuth } from 'redux/auth/authSelector';
import { ListStyled, NavLinkStyled } from './MenuStyled';
import { useSelector } from 'react-redux';

const Menu = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <nav>
      {!isAuth && (
        <ListStyled>
          <li>
            <NavLinkStyled to="/register">Register</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/login">Login</NavLinkStyled>
          </li>
        </ListStyled>
      )}
    </nav>
  );
};

export default Menu;
