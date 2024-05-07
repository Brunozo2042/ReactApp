import './App.css';
import Header from './Header'
import Counter from './Counter'

function App() {
    return (
        <div>
            <Header name="Bruno H." links={["Sobre","Comprar","Contato","Login"]}></Header>
            <Counter count={1}></Counter>
        </div>
    );
}

export default App;
