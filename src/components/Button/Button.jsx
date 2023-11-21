import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

const CustomButton = ({ onClick }) => {
  return (
    <div>
      <ButtonLoad type="button" onClick={onClick}>
        Load more
      </ButtonLoad>
    </div>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;


