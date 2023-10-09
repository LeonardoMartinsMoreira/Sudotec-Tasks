import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Counter } from "./Counter";
import { AboutUs } from "./About";
import { Login } from "./Login";

function Home() {
  return (
    <div className="h-screen bg-blue-50 w-screen flex flex-col">
      <a href="/counter">Ir para o contador</a>
      <a href="/about">Ir para sobre nós</a>
      <a href="/login">Ir para a pagina de login</a>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
