import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InscriptionRestauration from "./pages/InscriptionRestauration";
import AdminInscription from "./pages/AdminInscription";
import Landing from "./pages/Landing";
import Connexion from "./pages/Connexion";
import Historique from "./pages/Historique";
import NouveauRepas from "./pages/NouveauRepas";
import AllMenuPage from "./pages/AllMenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<AllMenuPage />} />
          <Route element={<Historique />} path="historique" />
          <Route element={<NouveauRepas />} path="nouveau-repas" />
        </Route>
        <Route
          element={<InscriptionRestauration />}
          path="/restaurant-creation"
        />
        <Route element={<AdminInscription />} path="/admin-creation" />
        <Route element={<Connexion />} path="/connexion" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
