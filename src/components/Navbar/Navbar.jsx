import React, { useEffect } from 'react';
import { NavbarStyled } from '../../ui';
import { NavButton } from '../../ui';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, userLoggedIn } from '../../features/auth/authSlice';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    if (e.target.innerText === 'Login') {
      dispatch(userLoggedIn({ username: 'sefi', isLoggedIn: true }));
    } else {
      dispatch(userLoggedIn({ username: '', isLoggedIn: '' }));
    }
  };

  return (
    <NavbarStyled>
      <img
        src="https://res.cloudinary.com/dio4xgjq5/image/upload/v1667498130/15d025c47a884a4a9b62faada057de82_ptr4tm.png"
        alt="logo"
      />
      <div className="nav-btns">
        <NavButton>Upload</NavButton>

        {!isLoggedIn ? (
          <NavButton onClick={handleLogin} login>
            Login
          </NavButton>
        ) : (
          <NavButton onClick={handleLogin} login>
            Logout
          </NavButton>
        )}
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
