
import './App.css';
import DmkoHeader from './components/Header/DmkoHeader'
import DmkoFooter from './components/Footer/DmkoFooter'
import FormSignUp from "./components/Forms/Auth/FormSignUp";

function App() {
  return (
    <div className="App">
        <DmkoHeader></DmkoHeader>
        <FormSignUp></FormSignUp>
        <DmkoFooter></DmkoFooter>
    </div>
  );
}

export default App;
