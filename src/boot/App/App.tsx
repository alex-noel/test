import React from "react";
import { StoreContext } from "redux-react-hook";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import theme from "utils/themeSettings";
import { HomeContainer } from "pages/Home";
import { initiateStore } from "./functions";

const store = initiateStore();

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StoreContext.Provider value={store}>
        <ThemeProvider theme={theme}>
          <HomeContainer />
        </ThemeProvider>
      </StoreContext.Provider>
    </Provider>
  );
};
