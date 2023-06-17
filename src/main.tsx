import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";

import router from "./Router";
import { GlobalStyle } from "./GlobalStyle";
import { queryClient } from "./utils/queryClient";

import { theme } from "./styles/theme";
import "./styles/reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
