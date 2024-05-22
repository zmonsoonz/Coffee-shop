import Navbar from "../components/Navbar"
import { CoffeeService } from "../services/CoffeeService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRef } from "react";

const OurCoffee = () => {

    const {getBest, process, setProcess} = CoffeeService();
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [filters, setFilters] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getBest("http://localhost:3001/all_coffee")
            .then(res => {setCards(res);setFilteredCards(res)})
            .then(() => setProcess('fetched'))
            .catch(e => console.log(e))
        getBest("http://localhost:3001/filters")
            .then(res => setFilters(res))
            .catch(e => console.log(e))
    }, [getBest, setProcess])

    function renderCards(cards) {
        const elems = cards.map(({id, image, name, country, price}) => {
            return (
                <CSSTransition timeout={300} classNames={"coffee__item"} key={id}>
                    <Link to={`/our-coffee/${id}`}>
                        <li className="filters_coffee-item">
                            <div className="filters_coffee-item__img">
                                <img src={`coffee-images/${image}`} alt="coffee-img"/>
                            </div>
                            <span className="filters_coffee-item__title">{name}</span>
                            <span className="filters_coffee-item__country">{country}</span>
                            <span className="filters_coffee-item__price">{price}</span>
                        </li>
                    </Link>
                </CSSTransition>
            )
        })
        return (
            <TransitionGroup component={null}>
                {elems}
            </TransitionGroup>
        )
    }

    const itemRefs = useRef([]);

    const focusOnRef = (id) => {
        itemRefs.current.forEach(item => item.classList.remove("filter_btn__active"));
        itemRefs.current[id].classList.add("filter_btn__active");
    }

    function renderFilters(filters) {
        const elems = filters.map((item, i) => {
            return (
                <button 
                className="filter_btn" 
                onClick={(e) => {filterState(item.name, cards, e); focusOnRef(i)}}
                ref={el => itemRefs.current[i] = el} key={i}>{item.name}</button>
            )
        })
        return elems
    }
    const filterState = (filter, cards, btn) => {
        const elems = cards.filter(item => item.country === filter)
        setFilteredCards(elems);
    }

    const filterSearch = (value, cards) => {
        setSearch(value);
        clearFilters(cards);
        const elems = cards.filter(item => item.country.slice(0, value.length) === value);
        setFilteredCards(elems);
    }

    const clearFilters = (cards) => {
        itemRefs.current.forEach(item => item.classList.remove("filter_btn__active"));
        setFilteredCards(cards)
    }

    return (
        <>
            <section className="head">
                <div className="container">
                    <header>
                        <Navbar active="1" section="header"/>
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
                            <label onClick={() => clearFilters(cards)} htmlFor="search">Or filter</label>
                            <span className="filters__btns">
                                {renderFilters(filters)}
                            </span>
                        </div>
                    </div>
                    <ul className="filters_coffee__items">
                        {process === 'fetched' ? filteredCards.length !== 0 ? 
                        renderCards(filteredCards) : 
                        <p>There is no such coffee</p> : 
                        <img src="/coffee-images/spinner.svg" alt="spinner"/>}
                    </ul>
                </div>
            </section>
            <footer>
                <Navbar active="1" section="footer"/>
            </footer>
        </>
    )
}

export default OurCoffee