import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from '../logo';
import NavItems from './navItems';

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  min-height: 4.25rem;
  ${tw`
w-full
max-w-screen-2xl
flex
flex-row
items-center
lg:pl-12
lg:pr-12
justify-between
`}
`;
const LogoContainer = styled.div``;
