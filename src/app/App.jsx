import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SeparatePost from "../pages/SeparatePost";
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/post/:id' element={<SeparatePost />} />
    </Routes>
  );
}

export default App;
