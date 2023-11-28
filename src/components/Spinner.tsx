import React from 'react';
import Loading from '@/assets/common-spinner.svg';
import styled from 'styled-components';
function Spinner() {
  return (
    <ImgBox>
      <Img src={Loading} alt="잠시만 기다려 주세요." />
      <div>잠시만 기다려 주세요.</div>
    </ImgBox>
  );
}

export default Spinner;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
`;
