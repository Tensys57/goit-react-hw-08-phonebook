import { useDispatch, useSelector } from 'react-redux';
import { LogoutStyled, WrapStyled } from './UserMenuStyled';
import { logoutUser } from 'redux/auth/authOperations';
import { selectLogout } from 'redux/auth/authSelector';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <WrapStyled>
      <LogoutStyled type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </LogoutStyled>
      <p>{useSelector(selectLogout)}</p>
    </WrapStyled>
  );
};

export default UserMenu;
