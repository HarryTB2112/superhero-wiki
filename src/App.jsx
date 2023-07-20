import "./App.css";
import { HomePage, SuperHeroPage, SuperHerosPage } from "./pages";
import { Nav } from "./components";
import { Routes, Route } from "react-router-dom";

// API: https://superheroapi.com/api/1577444655998791

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="/superheroes" element={<SuperHerosPage />} />
        <Route path="/:id" element={<SuperHeroPage />} />
      </Route>
    </Routes>
  );
}

export default App;
