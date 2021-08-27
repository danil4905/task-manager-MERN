import  { components } from 'react-select';
import React from 'react';
import {ReactComponent as Arrow} from '../../assets/arrow-down.svg';



export const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator >
        <Arrow />
      </components.DropdownIndicator>
    );
  };
