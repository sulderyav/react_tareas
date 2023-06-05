import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Bienvenido a mi sitio</h1>
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />

    </div>
  );
}
function MyButton() {
  return (
    <button>
      Soy un Boton
    </button>
  );
}
export default App;
