import { useState, useEffect } from "react";
import "./App.scss";
import { MainPage, NotFoundPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { INDEX_PAGE, NOT_FOUND_PAGE } from "./routes";
import TopNavigation from "./components/ui/top-navigation/TopNavigation";
import Footer from "./components/ui/footer/Footer";
import Loading from "./components/loading/Loading";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  });

  return (
    <div className="portfolio_container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <TopNavigation />
            <Routes>
              <Route path={INDEX_PAGE} element={<MainPage />} />
              <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
