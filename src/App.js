import logo from './logo.svg';
import './App.css';
import Products from './Component/Products/Products';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <div className='Question'>
        <h2>How React Works?</h2>
        <p>React. js is an famous open-source JavaScript library that is used for building user interfaces webpage.React implements a virtual DOM that is basically a DOM tree representation in JavaScript.Then the virtual DOM will find the best possible webs to update the browser’s DOM. JSX converts HTML tags into react elements and make it easer to build. React is a most used framework now a days because of the flexibility. </p>
        <h2>How usestate works?</h2>
        <p>useState is a react Hook that allows you to declare one of more state variables in functional components.Under the hood, React keeps track of these state variables and ensures they stay updated on the component.Declearing state we can transfer data to one component to another </p>
      </div>

    </div>
  );
}

export default App;
