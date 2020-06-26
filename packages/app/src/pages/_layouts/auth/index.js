import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import LogoCliente from '../../../assets/nova-logo-pxm.png';
import Logo from '../../../assets/lumiere-logo.png';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <img src={LogoCliente} alt="Avatar" height="110" margin="60px" />
      <Content>{children}</Content>
      <img src={Logo} alt="Avatar" height="100px" width="100px" />
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
