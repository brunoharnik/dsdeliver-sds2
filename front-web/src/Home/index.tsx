import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <section className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h2 className="home-title">Faça seu pedido que entregamos para você!</h2>
                        <h3 className="home-subtitle">Escolha o seu pedido e, em minutos, levaremos até sua casa.</h3>
                        <Link className="home-btn-order" to="/orders">Fazer pedido</Link>
                    </div>
                    <div className="home-image">
                        <MainImage />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;