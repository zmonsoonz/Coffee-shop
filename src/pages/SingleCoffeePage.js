import Navbar from "../components/Navbar";
import { CoffeeService } from "../services/CoffeeService";
import { useEffect, useState } from "react";
import { useParams} from 'react-router-dom';

const SingleCoffee = () => {

    const {id} = useParams();
    const {getBest, setProcess} = CoffeeService();
    const [coffee, setCoffee] = useState({});

    useEffect(() => {
        getBest(`http://localhost:3001/all_coffee?id=${id}`)
            .then(res => setCoffee(res[0]))
            .then(() => setProcess('fetched'))
            .catch(e => console.log(e))
        }, [getBest, setProcess, id])

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
            <section className="about_it">
                <div className="container flex">
                    <img src="/coffee-images/singlecoffee.jpg" alt="beans"/>
                    <span>
                        <h2 className="about_it__title">About it</h2>
                        <div className="about_it__par">
                            <p className="about_it__text"><b>Country: </b>{coffee.country}</p><br/>
                            <p className="about_it__text"><b>Description:</b> Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/>
                            <p className="about_it__text"><b>Price: </b><strong>{coffee.price}</strong></p>
                        </div>
                    </span>
                </div>
            </section>
            <footer>
                <Navbar active="1" section="footer"/>
            </footer>
        </>
    )
}

export default SingleCoffee