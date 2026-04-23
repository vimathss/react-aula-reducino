import ExercicioPlaceholder from "../components/ExercicioPlaceholder";
import { useState } from "react";

function ExercicioUm() {
  const [contador, setContador] = useState(0)
  const max = 10;
  const min = 0;

  function add(){
    if (contador < max)
      setContador(contador+1)
  }

  function sub(){
    if (contador > min)
      setContador(contador-1)
  }
 

  let mensagem = "Dentro do limite..."
  if (contador == max)
    mensagem = "Chegou ao limite!"
  else if (contador == min)
    mensagem = "O valor está muito baixo!"

  return (
    <div className="grid grid-cols-1 justify-center "> 
      <ExercicioPlaceholder
        titulo="Exercicio 01 - Contador com Limites"
        arquivoMarkdown="01-contador-com-limites.md"
      />

      <div className="grid grid-cols-1 text-center justify-center bg-white p-8 text-black">
        <h1 id="contador" className="text-4xl font-bold m-2">{contador}</h1>
        <p>{mensagem}</p>
        <button className="bg-red-600 p-4 m-2" onClick={add}>+1</button>
        <button className="bg-red-600 p-4 m-2" onClick={sub}>-1</button>
        <button className="bg-red-600 p-4 m-2" onClick={()=>{setContador(0)}}>Remover</button>

      </div>
    </div>

    
  );
}

export default ExercicioUm;
