import React from 'react';
import { NavbarStyled } from '../../ui';
import { NavButton } from '../../ui';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, login } from '../../features/auth/authSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(selectCurrentUser);

  const handleLogin = (e) => {
    dispatch(login());
  };

  return (
    <NavbarStyled>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dio4xgjq5/image/upload/v1667498130/15d025c47a884a4a9b62faada057de82_ptr4tm.png"
          alt="logo"
        />
      </Link>
      <div className="nav-btns">
        <Link to="/upload">
          <NavButton>Upload</NavButton>
        </Link>
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
