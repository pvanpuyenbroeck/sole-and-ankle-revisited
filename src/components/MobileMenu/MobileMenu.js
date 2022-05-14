/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
      <MenuWrapper>
          <CloseButton>
              <Icon id='close' strokeWidth={1} onClick={onDismiss} />
          </CloseButton>
          {/* <button onClick={onDismiss}>Dismiss menu</button> */}
          <NavItems>
              <Links href='/sale'>Sale</Links>
              <Links href='/new'>New&nbsp;Releases</Links>
              <Links href='/men'>Men</Links>
              <Links href='/women'>Women</Links>
              <Links href='/kids'>Kids</Links>
              <Links href='/collections'>Collections</Links>
          </NavItems>
          <Footer>
              <Links href='/terms'>Terms and Conditions</Links>
              <Links href='/privacy'>Privacy Policy</Links>
              <Links href='/contact'>Contact Us</Links>
          </Footer>
      </MenuWrapper>
  );
};

const CloseButton = styled(UnstyledButton)`
  position:absolute;
  top: 20px;
  right:20px;
`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    position:absolute;
    bottom: 50px ;
`;

const Links = styled.a`
    text-decoration: none;
    color: black;
    font-weight: ${WEIGHTS.medium};
    line-height: 2.5rem;
    font-size: 1.2rem ;

      ${Footer} & {
        font-size: 0.8rem ;
        line-height:1.5rem ;
        color:var(--gray700);
      }
`;

const NavItems = styled.nav`
    display: flex;
    flex-direction: column;
`;
const MenuWrapper = styled.div`
  position: absolute;
  height: 100vh;
  background-color:white;
  z-index:2;
  right: 0px;
  width: 300px ;
  font-family:'raleway';
  color:black;
  padding-left: 50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

export default MobileMenu;
