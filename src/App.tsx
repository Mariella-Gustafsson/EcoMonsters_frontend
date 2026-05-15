import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameView from "./pages/GameView";
import MainLayout from "./components/layout/game-layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <GameView />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
