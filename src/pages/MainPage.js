const MainPage = () => {
    return (
        <section className="main">
            <div className="container">
                <header>
                    <nav>
                        <ul>
                            <li>Coffee house</li>
                            <li>Our coffee</li>
                            <li>For yout pleasure</li>
                        </ul>
                    </nav>
                </header>
                <div className="main__title">
                    <h1>Everything You Love About Coffee</h1>
                    <h2 className="main__title__text">We makes every day full of energy and taste</h2>
                    <h2 className="main__title__text">Want to try our beans?</h2>
                    <button className="main__title__btn">More</button>
                </div>
            </div>
        </section>
    )
}

export default MainPage;