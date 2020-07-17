import React from "react";
import Main from "../Main";
// import { Provider } from 'react-redux';
// import store from './store';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // <Provider store={store}>
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    // </Provider>
  );
}

export default App;
