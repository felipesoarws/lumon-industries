import { useEffect, useState } from "react";
import computer from "../assets/terminal/note2.png";
import casey from "../assets/terminal/casey.png";
import macrodados from "../assets/terminal/severence-numbers.gif";
import kier from "../assets/terminal/kier-eagan.gif";

import "../styles/app.css";

const folders = [
  "iniciar",
  "refinamento-de-macrodados",
  "design-e-optica",
  "bem-estar",
  "saiba-mais",
  "voltar",
];

const Terminal = () => {
  const [folderSelected, setFolderSelected] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState<number>();

  useEffect(() => {
    document.title = "LUMON";
  });

  useEffect(() => {
    setFolderSelected(folders[selectedIndex]);
  }, [selectedIndex]);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <img
        src={computer}
        alt="computer"
        className="select-none pointer-events-none absolute w-[100vw] h-[100vh] object-cover -z-50"
      />

      <div className="h-[90vh] overflow-y-auto lg:overflow-hidden">
        <div className="text-[var(--cyan)] font-mono p-6 lg:p-[5vw]">
          <h2 className="text-xl mb-1 underline">terminal da Lumon</h2>
          <h3 className="text-[1rem] mb-4 lg:text-[1.2vw]">
            selecione e clique para ver mais.
          </h3>
          <div className="flex flex-col items-start gap-2 lg:gap-[1vw] lg:flex-row">
            <ul className="w-80 border border-[var(--cyan)] bg-[var(--blue-dark)] lg:w-[18vw]">
              {folders.map((folder, index) => (
                <li
                  key={folder}
                  onClick={() => handleClick(index)}
                  className={`p-1 cursor-pointer transition-all lg:p-[.5vw] ${
                    index === selectedIndex
                      ? "bg-[var(--cyan)] text-[var(--blue-dark)] font-bold"
                      : ""
                  }`}
                >
                  {">"} {folder}
                </li>
              ))}
            </ul>
            <div>
              {!folderSelected ? (
                <></>
              ) : (
                <FolderSelected option={String(folderSelected)} />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terminal;

const FolderSelected = ({ option }: { option: string }) => {
  if (option === "iniciar") {
    window.location.href = "https://www.youtube.com/watch?v=JRnDYB28bL8&t=119s";
  }

  if (option === "voltar") {
    window.location.href = "/";
  }

  return (
    <>
      {option === "refinamento-de-macrodados" ? (
        <div className="lowercase bg-[var(--cyan)] p-4 mb-3 text-[var(--blue-dark)] lg:min-w-[60vw] lg:max-w-[60vw]  lg:p-[1vw]">
          <h2 className="font-bold">
            Setor responsável por analisar e purificar grandes volumes de dados
            com base em critérios enigmáticos e sensíveis.
          </h2>
          <div className="my-4 gap-4 lg:my-[1.5vw] flex flex-col lg:gap-[.8vw] lg:text-[1vw]">
            <p>
              Neste departamento, os funcionários lidam com cifras e clusters
              numéricos que devem ser classificados com base em sentimentos
              intuitivos de ameaça.
            </p>
            <p>
              Apesar da natureza objetiva dos dados, os critérios de avaliação
              são subjetivos e baseados na experiência emocional do refinador.
            </p>
            <img
              src={macrodados}
              alt="macrodados"
              className="lg:w-[15vw] pointer-events-none"
            />

            <p className="font-bold">tarefas:</p>
            <ol className="pl-4 list-[square] lg:pl-[1vw] ">
              <li>Identificar “dados assustadores”.</li>
              <li>
                Utilizar ferramentas que respondem a reação emocional do
                usuário.
              </li>
              <li>Manter precisão sob forte pressão psicológica.</li>
            </ol>
          </div>
        </div>
      ) : (
        <></>
      )}
      {option === "design-e-optica" ? (
        <div className="lowercase bg-[var(--cyan)] p-4 mb-3 text-[var(--blue-dark)] lg:min-w-[60vw] lg:max-w-[60vw]  lg:p-[1vw]">
          <h2 className="font-bold">
            Um setor onde criatividade e controle caminham lado a lado.
            Responsável pela comunicação visual interna e manutenção da
            iconografia da empresa.
          </h2>
          <div className="my-4 gap-4 lg:my-[1.5vw] flex flex-col lg:gap-[.8vw] lg:text-[1vw]">
            <p>
              Este departamento cuida da estética institucional da Lumon, desde
              o design de pôsteres motivacionais até as apresentações de novos
              procedimentos.
            </p>
            <p>
              No entanto, rumores indicam que também atuam em formas sutis de
              controle visual e propagação de mensagens subliminares.{" "}
            </p>

            <p className="font-bold">tarefas:</p>
            <ol className="pl-4 list-[square] lg:pl-[1vw] ">
              <li>Criar campanhas visuais para a cultura corporativa.</li>
              <li>
                Desenvolver identidades visuais para novos projetos internos.
              </li>
              <li>
                Manipular a iluminação e o layout dos espaços para influenciar o
                comportamento.
              </li>
            </ol>
          </div>
        </div>
      ) : (
        <></>
      )}
      {option === "bem-estar" ? (
        <div className="relative lowercase bg-[var(--cyan)] p-4 mb-3 text-[var(--blue-dark)] lg:min-w-[60vw] lg:max-w-[60vw]  lg:p-[1vw]">
          <h2 className="font-bold">
            Uma divisão voltada à estabilidade emocional dos funcionários — ou
            ao controle emocional, dependendo do ponto de vista.
          </h2>
          <div className="my-4 gap-4 lg:my-[1.5vw] flex flex-col lg:gap-[.8vw] lg:text-[1vw]">
            <p>
              Funcionários são convidados a participar de sessões de relaxamento
              que misturam psicologia básica, doutrina empresarial e práticas
              ritualísticas.
            </p>
            <p>
              Recompensas são oferecidas com base na performance emocional, como
              vídeos comemorativos ou petiscos.
            </p>
            <p>
              É neste setor que os internos encontram a presença tranquilizadora
              da Sra. Casey, orientadora de bem-estar emocional. Com sua voz
              calma e linguagem ensaiada, ela conduz sessões que visam restaurar
              o equilíbrio interno dos funcionários, utilizando técnicas
              cuidadosamente selecionadas pela diretoria da Lumon. Seus métodos
              são precisos, acolhedores e... profundamente reguladores.
            </p>

            <p className="font-bold">tarefas:</p>
            <ol className="pl-4 list-[square] lg:pl-[1vw] ">
              <li>Participar de sessões de reequilíbrio emocional.</li>
              <li>Receber reconhecimento com recompensas simbólicas.</li>
              <li>Explorar a própria relação com a identidade e o trabalho.</li>
            </ol>
          </div>
          <div className="lg:absolute lg:right-[1vw] lg:bottom-[1vw]">
            <img
              src={casey}
              alt="ms. casey"
              className="pointer-events-none lg:w-[15vw] block "
            />
            <span className="text-[.9rem] lg:font-[1vw]">Ms. Casey</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      {option === "saiba-mais" ? (
        <div className="lowercase bg-[var(--cyan)] p-4 mb-3 text-[var(--blue-dark)]  lg:p-[1vw]">
          <a
            href="https://tv.apple.com/br/show/ruptura/umc.cmc.1srk2goyh2q2zdxcx605w8vtx"
            target="_blank"
          >
            clique aqui para entender mais como operamos! ;)
            <div className="flex">
              <img
                src={kier}
                alt="kier eagan"
                className="pointer-events-none my-8 lg:w-[30vw] block "
              />
            </div>
          </a>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const Footer = () => {
  return (
    <div className="font-mono text-center lowercase p-2 mb-2 text-[var(--cyan)] lg:p-[.4vw] lg:m-[1vw] font-bold absolute bottom-0 left-0 lg:text-[1vw] lg:text-left">
      &copy; {new Date().getFullYear()} Lumon Industries. Todos os direitos
      reservados.
    </div>
  );
};
