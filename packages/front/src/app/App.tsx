import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ChakraProvider } from "@chakra-ui/react";

import "~/shared/config/i18n";
import "~/shared/styles/variable.css";
import { ThemeProvider } from "~/shared/theme";
import { chakraConfig } from "~/shared/config";
import { routeTree } from "~/routeTree.gen";

import "./styles/normalize.css";
import "./styles/index.css";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  return (
    <ThemeProvider>
      <ChakraProvider value={chakraConfig}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ThemeProvider>
  );
};
