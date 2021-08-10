import { useState, useEffect } from "react";
import React, { Fragment } from "react";
function Home() {
  return (
    <Fragment>
      <section className="view">
        <nav className="nav">
          <ul className="nav__links">
            <li className="nav__item">
              <a>Quem Sou</a>
            </li>
            <li className="nav__item">
              <a>Projetos</a>
            </li>
            <li className="nav__item">
              <a>Tecnologias Utilizadas</a>
            </li>
            <li className="nav__item">
              <a>Contato</a>
            </li>
          </ul>
        </nav>
        <Header />
      </section>
      <Apresentacao />
    </Fragment>
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
      <p className="header__text"></p>
    </div>
  );
}
function Apresentacao() {
  return (
    <div className="apresentacao" id="quemsou">
      <p>
        Olá me chamo Tiago Rodrigues Machado,tenhos 25 anos.
        <br />
        sou formado em analise e desenvolvimento de sistemas pela universidade
        são judas unimonte
        <br />
      </p>
    </div>
  );
}
const isBrowser = typeof window !== "undefined";
function ScrolTo(e) {
  if (isBrowser) {
    document.querySelector(".nav").addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);
    });
  }
}

ScrolTo();
export default Home;
