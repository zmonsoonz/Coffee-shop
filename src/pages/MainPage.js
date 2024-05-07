import { useEffect, useState } from "react";
import { CoffeeService } from "../services/CoffeeService";
import Navbar from "../components/Navbar";
const MainPage = () => {

    const {getBest, process, setProcess} = CoffeeService();
    const [coffee, setCoffee] = useState([]);

    useEffect(() => {
        getBest("http://localhost:3001/our best")
            .then(res => setCoffee(res))
            .then(() => setProcess('fetched'))
    }, [getBest, setProcess])
    console.log('render')

    function renderCards(coffee) {
        const elems = coffee.map((item, i) => {
            return (
                <li className="our_best-item" key={i}>
                    <div className="our_best-item__img">
                        <img src={`coffee-images/${item.image}`} alt="coffee-img"/>
                    </div>
                    <span className="our_best-item__title">{item.name}</span>
                    <span className="our_best-item__price">{item.price}</span>
                </li>
            )
        })
        return elems;
    }
    return (
        <>
            <section className="main">
                <div className="container">
                    <header>
                        <Navbar/>
                    </header>
                    <div className="main__title">
                        <h1>Everything You Love About Coffee</h1>
                        <h2 className="main__title__text">We makes every day full of energy and taste</h2>
                        <h2 className="main__title__text">Want to try our beans?</h2>
                        <button className="main__title__btn">More</button>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <h2 className="about__title">
                        About Us
                    </h2>
                    <p className="about__par">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. 
                        Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. 
                        Children me laughing we prospect answered followed. At it went is song that held help face.<br/><br/>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. 
                        Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. 
                        Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active 
                        living depend son repair day ladies now.</p>
                </div>
            </section>
            <section className="our_best">
                <div className="container">
                    <h2 className="our_best__title">Our best</h2>
                    <ul className="our_best__items">
                        {process === 'fetched' ? renderCards(coffee) : null}
                    </ul>
                </div>
            </section>
            <footer>
                <Navbar/>
            </footer>
        </>
    )
}


export default MainPage;