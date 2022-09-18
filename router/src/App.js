import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar";
import ArticleDetailPage from "./pages/ArticleDetailPage";

import ArticlePage from "./pages/ArticlePage";
import CatalogPage from "./pages/CatalogPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LocationPage from "./pages/LocationPage";
import LocationsDetailPage from "./pages/LocationsDetailPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="articles" element={<ArticlePage />} />
        <Route path="articles/:articleId" element={<ArticleDetailPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="locations" element={<LocationPage />} />
        <Route path="locations/:locationId" element={<LocationsDetailPage/>}/>
        <Route path="admin">
          <Route path="user" element={<UserPage />} />
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;