import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { KeycloakProvider } from "./KeycloakProvider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KeycloakProvider>
      <App />
    </KeycloakProvider>
  </StrictMode>
);
