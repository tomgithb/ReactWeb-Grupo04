import Routes from "./Routes";

import ContextoCredenciais from "./context/credenciais";
//importe do global css 
import "./global.css";


function App() {
  return (
    <ContextoCredenciais>
      <Routes />
    </ContextoCredenciais>
  );
}

export default App;
