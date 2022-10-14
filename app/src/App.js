import './css/App.css';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

const url = window.location.pathname.split("/").pop().replace(".html", "");
document.title = GetTitle();

function App() {
  return (
    <>
      <NavBar/>
      {GetPage()}
      <Footer/>
    </>
  );
}

function GetPage() {
  if (url == "index") return (<MainPage/>);
  if (url == "contact") return (<ContactPage/>);
}

function GetTitle() {
  if (url == "index") return "Fixxo";
  if (url == "contact") return "Contact - Fixxo";
}

export default App;
