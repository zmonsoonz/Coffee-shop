import { Link } from "react-router-dom";

const Navbar = ({active, section}) => {

    const menu = [
        {
        name: "Coffee house",
        link: "/",
        },
        {
        name: "Our coffee",
        link: "/our-coffee",
        },
        {
        name:  "For your pleasure",
        link: "/pleasure"
        }];

    function renderMenu(menu) {
        const elems = menu.map((item, i) => {
            return (
                <li className = {active == i ? section === "header" ? "w" : "b" : null} key={i}><Link to={item.link}>{item.name}</Link></li>
            )
        })
        return elems
    }
    return (
        <nav>
            <ul>
                {renderMenu(menu)}
            </ul>
        </nav>
    )
}

export default Navbar