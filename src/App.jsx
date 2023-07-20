import "./App.css";
import { HomePage, PokedexPage, PokemonPage } from "./pages";
import { Nav } from "./components";
import { Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./contexts/";

// API: https://superheroapi.com/api/1577444655998791

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path="/pokemon" element={<PokedexPage />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
        </Route>
      </Routes>
    </PokemonProvider>
  );
}

export default App;
