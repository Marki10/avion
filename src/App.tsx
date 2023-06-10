import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Pages/Home";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
