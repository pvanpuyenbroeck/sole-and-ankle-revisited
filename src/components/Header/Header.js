import React from 'react';
import styled from 'styled-components/macro';

import {WEIGHTS,QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState((false));

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
      <header>
          <SuperHeader />
          <MainHeader>
              <Side>
                  <Logo />
              </Side>
              <MainWrapper>
                  <Nav>
                      <NavLink href='/sale'>Sale</NavLink>
                      <Gap />
                      <NavLink href='/new'>New&nbsp;Releases</NavLink>
                      <Gap />
                      <NavLink href='/men'>Men</NavLink>
                      <Gap />
                      <NavLink href='/women'>Women</NavLink>
                      <Gap />
                      <NavLink href='/kids'>Kids</NavLink>
                      <Gap />
                      <NavLink href='/collections'>Collections</NavLink>
                  </Nav>
              </MainWrapper>
              <Spacer />
              <MobileHeader>
                  <UnstyledButton>
                      <Icon id='shopping-bag' strokeWidth={2} />
                  </UnstyledButton>
                  <UnstyledButton>
                      <Icon id='search' strokeWidth={2} />
                  </UnstyledButton>
                  <UnstyledButton>
                      <Icon id='menu' strokeWidth={2} onClick={() => setShowMobileMenu(true)} />
                  </UnstyledButton>
                  <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
              </MobileHeader>
              <Side />
          </MainHeader>
      </header>
  );
};

const Spacer = styled.div`
display:none ;
    @media ${QUERIES.tabletAndUp} {
        display: flex;
        width:max(100px,100%) ;
    }
`;

const MobileHeader = styled.div`
display:none ;
    @media ${QUERIES.tabletAndUp} {
        display: flex;
        gap: 40px;
    }
`;

const MainWrapper = styled.div`
display:initial;
overflow: auto;
  @media ${QUERIES.tabletAndUp}{
    display:none;

  }
`;

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid var(--gray300);

    @media ${QUERIES.tabletAndUp} {
        align-items: center;
        justify-content: space-between;
        width:100%;
    }
`;

const Gap = styled.div`
min-width: 16px;
width: 48px;
    flex-shrink:5;
`;

const Nav = styled.nav`
    display: flex;
    margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
