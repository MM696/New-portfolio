import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// ✅ Import QueryClient and QueryClientProvider
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ✅ Create a new query client instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* ✅ Wrap your app with QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
