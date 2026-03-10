import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import FormPage from "./pages/FormPage";
import Success from "./pages/Success";

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;