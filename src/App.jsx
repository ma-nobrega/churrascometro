import { FaBeer, FaGlassWhiskey, FaFireAlt } from "react-icons/fa";
import { GiSausage, GiChickenOven, GiBarbecue } from "react-icons/gi";
import { FiUsers, FiUser, FiRefreshCcw } from "react-icons/fi";
import ItemResultado from "./components/ItemResultado";
import "./styles/App.css";

export default function Churrascometro() {
  return (
    <div className="pagina">
      <div className="layout">

        <section className="card cardForm">
          <header className="cabecalho">
            <div className="cabecalhoIcone">
              <FaFireAlt />
            </div>

            <div className="cabecalhoTexto">
              <h1>Churrascômetro</h1>
              <p>Calcule a quantidade ideal para seu evento.</p>
            </div>
          </header>

          <div className="campo">
            <label>
              <GiBarbecue /> Nome do churrasco
            </label>
            <input
              type="text"
              placeholder="Ex: Churrasco da Firma"
            />
          </div>

          <div className="campo">
            <label>
              <FiUsers /> Número de adultos
            </label>
            <input
              type="number"
              min="0"
              defaultValue="10"
            />
          </div>

          <div className="campo">
            <label>
              <FiUser /> Número de crianças
            </label>
            <input
              type="number"
              min="0"
              defaultValue="8"
            />
          </div>

          <div className="acoes">
            <button className="botao botaoPerigo">
              <FiRefreshCcw /> Resetar
            </button>
          </div>
        </section>

        <section className="card">
          <header className="resultadoTopo">
            <h2>Churrasco da Firma</h2>
          </header>

          <div className="infoEvento">
            Quantidade de pessoas: <strong>18</strong>
          </div>

          {/* CARNES */}
          <div className="bloco">
            <div className="blocoTitulo">
              <FaFireAlt /> Carnes
            </div>

            <ItemResultado
              icone={<FaFireAlt />}
              nome="Carne Vermelha"
              valor="2.600 kg"
              tipo="itemCarnes"
            />

            <ItemResultado
              icone={<GiSausage />}
              nome="Linguiça"
              valor="1.300 kg"
              tipo="itemCarnes"
            />

            <ItemResultado
              icone={<GiChickenOven />}
              nome="Frango"
              valor="1.300 kg"
              tipo="itemCarnes"
            />

            <div className="totalSecundario">
              Total: <strong>5.200 kg</strong>
            </div>
          </div>

          {/* BEBIDAS */}
          <div className="bloco">
            <div className="blocoTitulo">
              <FaBeer /> Bebidas
            </div>

            <ItemResultado
              icone={<FaGlassWhiskey />}
              nome="Refrigerante"
              valor="2.6 L"
              tipo="itemBebidas"
            />

            <ItemResultado
              icone={<FaBeer />}
              nome="Cerveja"
              valor="5.2 L"
              tipo="itemBebidas"
            />

            <div className="totalSecundario">
              Total: <strong>7.8 L</strong>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}