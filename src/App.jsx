import { FiUsers, FiUser, FiRefreshCcw } from "react-icons/fi";
import {
  FaCalculator,
  FaFire,
  FaHotdog,
  FaDrumstickBite,
  FaGlassWhiskey,
} from "react-icons/fa";
import ItemResultado from "./components/ItemResultado";
import "./styles/App.css";

export default function Churrascometro() {
  return (
    <div className="pagina">
      <div className="layout">
        <section className="card cardForm">
          <header className="cabecalho">
            <div className="cabecalhoIcone">
              <FaFire />
            </div>

            <div className="cabecalhoTexto">
              <h1>Churrascômetro</h1>
              <p>Calcule a quantidade ideal de carne e refrigerante.</p>
            </div>
          </header>

          <div className="campo">
            <label>
              <FiUsers /> Número de adultos
            </label>
            <input type="number" min="0" value="2" readOnly />
          </div>

          <div className="campo">
            <label>
              <FiUser /> Número de crianças
            </label>
            <input type="number" min="0" value="1" readOnly />
          </div>

          <div className="acoes">
            <button className="botao botaoPrimario">
              <FaCalculator /> Calcular
            </button>

            <button className="botao botaoPerigo">
              <FiRefreshCcw /> Resetar
            </button>
          </div>
        </section>

        <section className="card">
          <header className="resultadoTopo">
            <h2>Resultado para 3 pessoas</h2>
          </header>

          <div className="bloco">
            <div className="blocoTitulo">
              <FaFire /> Carnes
            </div>

            <ItemResultado
              icone={<FaFire />}
              nome="Carne"
              valor="0.600 kg"
              tipo="itemCarnes"
            />

            <ItemResultado
              icone={<FaHotdog />}
              nome="Linguiça"
              valor="0.600 kg"
              tipo="itemCarnes"
            />

            <ItemResultado
              icone={<FaDrumstickBite />}
              nome="Frango"
              valor="0.600 kg"
              tipo="itemCarnes"
            />

            <div className="totalSecundario">
              Total: <strong>1.800 kg</strong>
            </div>
          </div>

          <div className="bloco">
            <div className="blocoTitulo">
              <FaGlassWhiskey /> Bebidas
            </div>

            <ItemResultado
              icone={<FaGlassWhiskey />}
              nome="Refrigerante"
              valor="1.5 L"
              tipo="itemBebidas"
            />
          </div>
        </section>
      </div>
    </div>
  );
}