import Navbar from "../components/Navbar";
import { CoffeeService } from "../services/CoffeeService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const PleasurePage = () => {

    const {getBest, process, setProcess} = CoffeeService();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getBest("http://localhost:3001/all_coffee")
            .then(res => setCards(res))
            .then(() => setProcess('fetched'))
            .catch(e => console.log(e))
    }, [getBest, setProcess])

    function renderCards(cards) {
        const elems = cards.map((item, i) => {
            return (
                <Link to={`/our-coffee/${i}`}>
                    <li className="filters_coffee-item" key={i}>
                        <div className="filters_coffee-item__img">
                            <img src={`coffee-images/${item.image}`} alt="coffee-img"/>
                        </div>
                        <span className="filters_coffee-item__title">{item.name}</span>
                        <span className="filters_coffee-item__country">{item.country}</span>
                        <span className="filters_coffee-item__price">{item.price}</span>
                    </li>
                </Link>
            )
        })
        return elems;
    }

    return (
        <>
            <section className="head_pleasure">
                <div className="container">
                    <header>
                        <Navbar active="2" section="header"/>
                    </header>
                    <h1 className="head__title">For Your Pleasure</h1>
                </div>
            </section>
            <section className="about_beans">
                <div className="container flex">
                    <img src="coffee-images/goods.png" alt="cup"/>
                    <span>
                        <h2 className="about_beans__title">About our goods</h2>
                        <p className="about_beans__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>
                            Afraid at highly months do things on at. Situation<br/>recommend objection do intention<br/>
                            so questions.<br/> 
                            As greatly removed calling pleased improve an.<br/>Last ask him cold feel<br/>
                            met spot shy want. Children me laughing we<br/> prospect answered followed. At it went<br/>
                            is song that held help face.</p>
                    </span>
                </div>
            </section>
            <section className="coffee_cards">
                <div className="container">
                    <ul className="filters_coffee__items">
                        {process === 'fetched' ? renderCards(cards) : <img src="/coffee-images/spinner.svg" alt="spinner"/>}
                    </ul>
                </div>
            </section>
            <footer>
                <Navbar active="2" section="footer"/>
            </footer>
        </>
    )
}

export default PleasurePage;