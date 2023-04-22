import './App.css'
import API from "./API";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Reference from './pages/reference';
import Encuesta from './pages/Encuesta';
import Main from './pages/Main';
import Resultados from './pages/Resultados';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="Encuesta" element={<Encuesta />} />
      <Route path="Referencia" element={<Reference />} />
      <Route path="Resultados" element={<Resultados />} />
    </Route>
  )
);

function App() {
  return (
   <RouterProvider router={router} />
  )
}

export default App
