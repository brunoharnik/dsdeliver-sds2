import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <section className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h2 className="home-title">Faça seu pedido que entregamos para você!</h2>
                        <h3 className="home-subtitle">Escolha o seu pedido e, em minutos, levaremos até sua casa.</h3>
                        <a className="home-btn-order" href="orders">Fazer pedido</a>
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