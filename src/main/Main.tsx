import * as React from 'react';
import Header from 'src/Layout/Header';
import { hot } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1032px;
  margin: 0 auto;
  position: relative;
`;

const Main = (): React.ReactElement<any> => (
  <Container>
    <Header />
  </Container>
);

export default hot(module)(Main);
