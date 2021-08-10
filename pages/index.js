import { useState } from "react";
function Home() {
  return (
    <section className="view">
      <nav className="nav">
        <ul>
          <li className="nav__links">
            <a>Quem Sou</a>
          </li>
          <li className="nav__links">
            <a>Projetos</a>
          </li>
          <li className="nav__links">
            <a>Tecnologias Utilizadas</a>
          </li>
          <li className="nav__links">
            <a>Contato</a>
          </li>
        </ul>
      </nav>
      <Header />
    </section>
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
function Header() {
  return (
    <div className="header">
      <p className="header__text">
        Olá me chamo Tiago Rodrigues Machado,tenhos 25 anos
      </p>
    </div>
  );
}

export default Home;
