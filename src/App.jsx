import { useState } from "react";
import "./App.css";
import { Banner } from "./Componentes/Banner";
import { CardEvento } from "./Componentes/CardEvento";
import { FormularioDeEvento } from "./Componentes/FormularioDeEvento";
import { Tema } from "./Componentes/Tema";

function App() {
  const temas = [
    {
      id: 1,
      nome: "Front-end",
    },
    {
      id: 2,
      nome: "Back-end",
    },
    {
      id: 3,
      nome: "Devops",
    },
    {
      id: 4,
      nome: "Inteligência artificial",
    },
    {
      id: 5,
      nome: "Datascience",
    },
    {
      id: 6,
      nome: "Cloud",
    },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ]);

  function adicionarEvento(evento) {
    // setEventos.push(evento);
    // console.log("evento =>", eventos);
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />

      <section className="container">
        {temas.map(function (tema) {
          if (
            !eventos.some(function (evento) {
              return evento.tema.id == tema.id;
            })
          ) {
            return null;
          }
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="eventos">
                {eventos
                  .filter(function (evento) {
                    return evento.tema.id == tema.id;
                  })
                  .map(function (evento, index) {
                    return <CardEvento evento={evento} key={index} />;
                  })}
              </div>
            </section>
          );
        })}
      </section>

      {/* <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section>
       */}
    </main>
  );
}

export default App;
