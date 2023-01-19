import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return <Container>&copy; {new Date().getFullYear()} Ywitter</Container>;
}

const Container = styled.div``;
