import { Outlet, Link } from "react-router-dom";
import './styles.css'

const Main = () => (
    <>
        <header id="main-header">
            <h3 id='titulo-header'>Encuesta Age of Empires II DE</h3>
            <nav id="main-nav">
                <ul>
                    <li><Link className="link" to='Encuesta'>Encuesta</Link></li>
                    <li><Link className="link" to='Resultados'>Resultados</Link></li>
                    <li><Link className="link" to='Referencia'>Referencia</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <div id="content">
                <Outlet />
            </div>
        </main>
    </>
);
export default Main;