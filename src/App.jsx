import { useState } from "react";
import "./App.css";
import Footer from './Footer'
import Tabelle from "./Tabelle";
import Header from "./Header";

function App() {
  const [suchbegriff, setSuchbegriff] = useState("");
  const [serviceTypAuswahl, setServiceTypAuswahl] = useState("");
  const [kantonAuswahl, setKantonAuswahl] = useState("");

  return (
    <div className="App">
      <Header 
        suchbegriff={suchbegriff}
        setSuchbegriff={setSuchbegriff} 
        kantonAuswahl={kantonAuswahl}
        setKantonAuswahl={setKantonAuswahl} 
        serviceTypAuswahl={serviceTypAuswahl}
        setServiceTypAuswahl={setServiceTypAuswahl}
      />
      <Tabelle 
        suchbegriff={suchbegriff} 
        kantonAuswahl={kantonAuswahl} 
        serviceTypAuswahl={serviceTypAuswahl}
      />
      <Footer 
        setSuchbegriff={setSuchbegriff} 
        setKantonAuswahl={setKantonAuswahl} 
        setServiceTypAuswahl={setServiceTypAuswahl}
      />
    </div>
  );
}

export default App;
