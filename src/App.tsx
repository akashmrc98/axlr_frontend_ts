import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./config/theme";

import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Products from "./pages/Products/Products";
import ProductsUpload from "./pages/ProductsUpload/ProductsUpload";

import ProtectedRoute from "@components/common/ProtectedRoute";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/products",
    element: <ProtectedRoute element={Products} />,
  },
  {
    path: "/upload",
    element: <ProtectedRoute element={ProductsUpload} />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
