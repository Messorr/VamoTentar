import { useState } from "react";

function Home() {
  return (
    <div>
      <h1>hellow</h1>
      <Contador />
    </div>
  );
}
function Contador() {
  const [contador, setContador] = useState(1);
  function adicionarContador() {
    setContador(contador + 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>adicionarContador</button>
    </div>
  );
}

export default Home;