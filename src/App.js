import Routes from "./Routes";
import Header from "./components/Header";

import ContextoCredenciais from "./context/credenciais";
//importe do global css 
import "./global.css";


function App() {
  return (
    <ContextoCredenciais>
      <Header />
      <Routes />
      
    </ContextoCredenciais>
  );
}

export default App;
