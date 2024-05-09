import Navbar from "../components/Navbar";

const SingleCoffee = ({data}) => {
    // const {src, country, description, price} = data;
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
            <section className="about_it">
                <div className="container flex">
                    <img src="coffee-images/aboutbeans.png" alt="beans"/>
                    <span>
                        <h2 className="about_it__title">About it</h2>
                        <div className="about_it__par">
                            <p className="about_it__text"><b>Country:</b> Brasil</p><br/>
                            <p className="about_it__text"><b>Description:</b> Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/>
                            <p className="about_it__text"><b>Price:</b>     <strong>16.99$</strong></p>
                        </div>
                    </span>
                </div>
            </section>
            <footer>
                <Navbar/>
            </footer>
        </>
    )
}

export default SingleCoffee