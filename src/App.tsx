import { Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
