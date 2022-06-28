import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
// import pages
import Home from "./pages/home";
import ColumnWrite from "./pages/columnWrite";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/column/write" element={<ColumnWrite />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
