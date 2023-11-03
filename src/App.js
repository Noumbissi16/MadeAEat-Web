import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InscriptionRestauration from "./pages/InscriptionRestauration";
import AdminInscription from "./pages/AdminInscription";
import { ProtectedLanding } from "./pages/Landing";
import Connexion from "./pages/Connexion";
import Historique from "./pages/Historique/Historique";
import AllMenuPage from "./pages/AllMenuPage";
import HistoriqueCommande from "./pages/Historique/HistoriqueCommande";
import HistoriqueMenu from "./pages/Historique/HistoriqueMenu";
import Parametre from "./pages/Parametre/Parametre";
import ProfileAdministrateur from "./pages/Parametre/ProfileAdministrateur";
import ProfileRestaurant from "./pages/Parametre/ProfileRestaurant";
import PublierAnnonce from "./pages/Parametre/PublierAnnonce";
import AjouterMenu from "./pages/Parametre/AjouterMenu";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedLanding />}>
          <Route index element={<AllMenuPage />} />
          <Route element={<Historique />} path="historique">
            <Route element={<HistoriqueCommande />} path="commande"></Route>
            <Route element={<HistoriqueMenu />} path="menu"></Route>
          </Route>
          <Route element={<Parametre />} path="parametre">
            <Route
              element={<ProfileAdministrateur />}
              path="profile-administrateur"
            />
            <Route element={<ProfileRestaurant />} path="profile-restaurant" />
            <Route element={<PublierAnnonce />} path="publier-annonce" />
            <Route element={<AjouterMenu />} path="menu">
              <Route path="ajouter" element={<AjouterMenu />} index />
              <Route path="modifier/:id" element={<AjouterMenu />} />
            </Route>
          </Route>
        </Route>
        <Route
          element={<InscriptionRestauration />}
          path="/restaurant-creation"
        />
        <Route element={<AdminInscription />} path="/admin-creation" />
        <Route element={<Connexion />} path="/connexion" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
