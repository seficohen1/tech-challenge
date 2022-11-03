import React from 'react';
import { Container, NavbarStyled } from '../../ui';
import { NavButton } from '../../ui';

const Navbar = () => {
  return (
    <NavbarStyled>
      <img
        src="https://res.cloudinary.com/dio4xgjq5/image/upload/v1667498130/15d025c47a884a4a9b62faada057de82_ptr4tm.png"
        alt="logo"
      />
      <div className="nav-btns">
        <NavButton>Upload</NavButton>
        <NavButton login>Login</NavButton>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
