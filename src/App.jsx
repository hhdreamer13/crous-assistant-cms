import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";

const router = createBrowserRouter(createRoutesFromElements(AllRoutes()));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
