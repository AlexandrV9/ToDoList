import { createRouter, RouterProvider } from "@tanstack/react-router";

import "./styles/normalize.css";
import "./styles/index.css";

import { routeTree } from "~/routeTree.gen";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const router = createRouter({ routeTree });

// https://habr.com/ru/articles/871528/

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};
