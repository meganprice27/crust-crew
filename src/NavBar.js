import './NavBar.css'
import pizzaSlice from "./images/pizzaSlice.png";
import basket from "./images/basket.png";

function NavBar() {
    return (
        <div className="NavBar">
             <div>
                    <img src={pizzaSlice} alt="Home" className="pizzaIcon"></img>
            </div>
            <div class="navBarLinks">
                <div>
                     OUR STORY
                </div>
                <div>
                    ORDER NOW
                </div>
                <div>
                    <img src={basket} alt="Home" className="basketIcon"></img>
                </div>  
            </div>
        </div>
    );
}

export default NavBar; 