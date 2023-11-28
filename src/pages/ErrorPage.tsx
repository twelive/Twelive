import React from 'react';
import Logo from '@/assets/common-logo.svg';
import styled from 'styled-components';
function ErrorPage() {
  return (
    <ErrorBox>
      <Img src={Logo} alt="로고" />
      <TextBox>
        <Text>이용에 불편을 드려 죄송합니다.</Text>
        <Text>현재 사용할 수 없습니다.</Text>
      </TextBox>
    </ErrorBox>
  );
}

export default ErrorPage;

const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 60%;
  height: 60%;
`;

const Text = styled.p`
  font-size: 40px;
`;
