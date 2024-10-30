import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import TvProvider from "./context/constext.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/index.css";
import "./custom.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TvProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TvProvider>
    </QueryClientProvider>
  </StrictMode>
);
