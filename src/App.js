import React, { Component } from "react";
import styled from "styled-components";
import Box from "./Box";
import SetButton from "./SetButton";
import GetButton from "./GetButton";

import reducer from "./Recuder";
import { createStore } from "redux";
import { Provider } from "react-redux";

const myStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <Container>
          <div>App Page</div>
          <Box />
          <SetButton />
          <GetButton />
        </Container>
      </Provider>
    );
  }
}

const Container = styled.section`
  background-color: #ddd;
  maring: 0;
  padding: 0;
`;

export default App;
