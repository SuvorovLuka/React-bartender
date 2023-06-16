import { alcohol } from './alco.data'
import Catalog from '../../components/Home/Catalog';
import CartForm from '../../components/Home/CartForm';

function Home() {
    return (
        <div className="container">
            <h1>
                React-Bartender
            </h1>
            <CartForm />
            <ul className="catalog">
                {alcohol.map(alcohol => (
                  <Catalog alcohol={alcohol} key={alcohol.id} />   
                ))}
            </ul>
        </div>
    );
}

export default Home;