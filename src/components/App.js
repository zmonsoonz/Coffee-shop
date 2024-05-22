import MainPage from "../pages/MainPage"
import OurCoffee from "../pages/OurCoffeePage";
import SingleCoffee from '../pages/SingleCoffeePage';
import PleasurePage from '../pages/PleasurePage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/our-coffee" element={<OurCoffee/>}/>
                <Route path="/our-coffee/:id" element={<SingleCoffee/>}/>
                <Route path="/pleasure" element={<PleasurePage/>}/>
            </Routes>
        </Router>
    )
}

export default App;