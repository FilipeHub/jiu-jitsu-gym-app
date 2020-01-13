import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import logoPath from '../../../assets/images/logo_jjgym.png';

export default function GlobalLayout({ children }) {
  return (
    <Wrapper>
        <img src={logoPath} alt="Jiu Jitsu Gym logo"/>
        {children}
    </Wrapper>
  );
}

GlobalLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
