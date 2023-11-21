import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CustomLoader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        color="#f8d703"
        height={80}
        width={80}
      />
    </LoaderWrapper>
  );
};

export default CustomLoader;