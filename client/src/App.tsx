import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <main className="w-full min-h-[100dvh] bg-greenbg text-white bg-cover bg-no-repeat bg-center">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
