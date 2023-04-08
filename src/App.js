import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
