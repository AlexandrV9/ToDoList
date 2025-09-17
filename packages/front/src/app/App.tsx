import { RouterProvider } from "@tanstack/react-router";
import { ChakraProvider } from "@chakra-ui/react";

import { router } from "./router";

import "~/shared/config/i18n";
import "~/shared/styles/variable.css";
import "./styles/normalize.css";
import "./styles/index.css";

import { ThemeProvider } from "~/shared/theme";
import { chakraConfig } from "~/shared/config";
import { TanstackProvider } from "./TanstackProvider";

export const App = () => {
  return (
    <TanstackProvider>
      <ThemeProvider>
        <ChakraProvider value={chakraConfig}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </ThemeProvider>
    </TanstackProvider>
  );
};
