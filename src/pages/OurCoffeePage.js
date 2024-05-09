import Navbar from "../components/Navbar"
import { CoffeeService } from "../services/CoffeeService";
import { useState, useEffect } from "react";

const OurCoffee = () => {

    const {getBest, process, setProcess} = CoffeeService();
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [filters, setFilters] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getBest("http://localhost:3001/all coffee")
            .then(res => {setCards(res);setFilteredCards(res)})
            .then(() => setProcess('fetched'))
        getBest("http://localhost:3001/filters")
            .then(res => setFilters(res));
    }, [getBest, setProcess])

    function renderCards(cards) {
        const elems = cards.map((item, i) => {
            return (
                <a href="#">
                    <li className="filters_coffee-item" key={i}>
                        <div className="filters_coffee-item__img">
                            <img src={`coffee-images/${item.image}`} alt="coffee-img"/>
                        </div>
                        <span className="filters_coffee-item__title">{item.name}</span>
                        <span className="filters_coffee-item__country">{item.country}</span>
                        <span className="filters_coffee-item__price">{item.price}</span>
                    </li>
                </a>
            )
        })
        return elems;
    }
    const filterState = (filter, cards, btn) => {
        const elems = cards.filter(item => item.country === filter)
        setFilteredCards(elems);
        document.getElementsByClassName("filter_btn");
        btn.target.classList.add("active")
    }
    const filterSearch = (value, cards) => {
        setSearch(value);
        const elems = cards.filter(item => item.country.slice(0, value.length) == value);
        setFilteredCards(elems);
    }

    return (
        <>
            <section className="head">
                <div className="container">
                    <header>
                        <Navbar/>
                    </header>
                    <h1 className="head__title">Our Coffee</h1>
                </div>
            </section>
            <section className="about_beans">
                <div className="container flex">
                    <img src="coffee-images/aboutbeans.png" alt="beans"/>
                    <span>
                        <h2 className="about_beans__title">About our beans</h2>
                        <p className="about_beans__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>
                            Afraid at highly months do things on at. Situation<br/>recommend objection do intention<br/>
                            so questions.<br/> 
                            As greatly removed calling pleased improve an.<br/>Last ask him cold feel<br/>
                            met spot shy want. Children me laughing we<br/> prospect answered followed. At it went<br/>
                            is song that held help face.</p>
                    </span>
                </div>
            </section>
            <section className="filters_coffee">
                <div className="container">
                    <div className="flex">
                        <div className="search">
                            <label htmlFor="search-inp">Looking for</label>
                            <input type="text" id="search-inp" 
                                   name="search" placeholder="start typing here..."
                                   onChange={(e) => filterSearch(e.target.value, cards)}
                                   value={search}></input>
                        </div>
                        <div className="filters">
                            <label onClick={() => setFilteredCards(cards)} htmlFor="search">Or filter</label>
                            <span className="filters__btns">
                                <button className="filter_btn" onClick={(e) => filterState("Brazil", cards, e)}>Brazil</button>
                                <button className="filter_btn" onClick={(e) => filterState("Kenya", cards, e)}>Kenya</button>
                                <button className="filter_btn" onClick={(e) => filterState("Columbia", cards, e)}>Columbia</button>
                            </span>
                        </div>
                    </div>
                    <ul className="filters_coffee__items">
                        {process === 'fetched' ? renderCards(filteredCards) : null}
                    </ul>
                </div>
            </section>
            <footer>
                <Navbar/>
            </footer>
        </>
    )
}

export default OurCoffee