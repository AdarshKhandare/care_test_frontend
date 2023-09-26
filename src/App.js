import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoadingContainer from "./components/containers/LoadingContainer";

import { AppRoutes } from "./config/routes";
import ThemeWrapper from "./components/containers/ThemeWrapper";

function App() {
  return (
    <ThemeWrapper>
      <LoadingContainer loading={false} full>
        <Router>
          <Routes>
            <Route path="*" element={<AppRoutes />} />
          </Routes>
        </Router>
      </LoadingContainer>
    </ThemeWrapper>
  );
}

export default App;
