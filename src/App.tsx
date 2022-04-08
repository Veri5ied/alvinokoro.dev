import "./App.scss";
import { SamplePage, NotFoundPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { INDEX_PAGE, NOT_FOUND_PAGE } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={INDEX_PAGE} element={<SamplePage />} />
        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
