import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import BackgroundGraphics from "./components/BackgroundGraphics";

function App() {
  return (
    <div className="relative h-full w-full overflow-clip">
      <BackgroundGraphics />
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
