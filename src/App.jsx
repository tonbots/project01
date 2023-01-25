import { Canvas } from "@react-three/fiber";
import "./App.css";
import Configurator from "./components/Configurator";
import Experience from "./components/Experience";
import { CustomizationProvider } from "./contexts/Customization";

function App() {
  return (
    <CustomizationProvider>
      <Canvas>
        <color attach="background" args={["#111827"]} />
        <fog attach="fog" args={["#101010", 10, 20]} />
        <Experience />
      </Canvas>
      <Configurator />
    </CustomizationProvider>
  );
}

export default App;
