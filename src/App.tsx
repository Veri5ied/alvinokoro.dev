import "./App.scss";
import { MainPage, NotFoundPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { INDEX_PAGE, NOT_FOUND_PAGE } from "./routes";
import TopNavigation from "./components/ui/top-navigation/TopNavigation";

function App() {
  return (
    <div className="portfolio_container">
      <div className="container">
        <TopNavigation />
        <Routes>
          <Route path={INDEX_PAGE} element={<MainPage />} />
          <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
