
import './App.css';
import DmKoHeader from "./components/header/DmKoHeader";
import DmKoMain from "./components/main/DmKoMain";
import DmKoFooter from "./components/footer/DmKoFooter";
import FilmLibrary from "./components/filmDir/FilmLibrary";

function App() {
  return (
    <div className="App">
        <DmKoHeader></DmKoHeader>
        <FilmLibrary></FilmLibrary>
        <DmKoFooter></DmKoFooter>
    </div>
  );
}

export default App;
