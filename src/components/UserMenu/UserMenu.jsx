import { useDispatch, useSelector } from 'react-redux';
import { LogoutStyled, WrapStyled } from './UserMenuStyled';
import { logoutUser } from 'redux/auth/authOperations';
import { selectEmail } from 'redux/auth/authSelector';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <WrapStyled>
      <LogoutStyled type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </LogoutStyled>
      <p>{useSelector(selectEmail)}</p>
    </WrapStyled>
  );
};

export default UserMenu;
