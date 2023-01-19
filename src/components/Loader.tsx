import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Bars } from 'react-loader-spinner';

import { contentCenter } from '../styles/mixin';
import { isLoadingAtom } from '../state/Atom';

export default function Loader() {
  const isLoading = useRecoilValue(isLoadingAtom);

  return (
    <Container
      isLoading={
        isLoading || localStorage.getItem('isLoading') !== null ? true : false
      }
    >
      <Wrap>
        <Bars width={60} height={60} color="white" wrapperClass="bar" />
      </Wrap>
    </Container>
  );
}

const Container = styled.div<{ isLoading: boolean }>`
  display: ${props => (props.isLoading ? 'block' : 'none')};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.7);
  z-index: 9999;
`;

const Wrap = styled.div`
  ${contentCenter};
  height: 100%;
`;
