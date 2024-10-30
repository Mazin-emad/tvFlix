import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/searchPage";
import ShowPage from "./pages/ShowPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="show/:id" element={<ShowPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
