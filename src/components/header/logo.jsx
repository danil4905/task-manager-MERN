import React from 'react';
import {Link} from 'react-router-dom';
import logoIcon from '../../assets/logo.png';

const Logo = (props) => (
        <Link to='/main'>   
            <img src={ logoIcon } alt='Logo' />
        </Link>
)
export default Logo;