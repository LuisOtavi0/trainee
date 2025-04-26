import "./App.css";

function App() {


  return (
    <div>
      <div className="div-teste">
        <button> botao 1 </button>
        <button> botao 2 </button>
        <button> botao 3 </button>
      </div>
      <input>
      </input>
      <div className="div-botao">
        <button
          className="botao-teste"
          onClick={() => alert("Botão apertado")}
        >
          Botão teste
        </button>
      </div>
      

    </div>
  )
}

export default App
