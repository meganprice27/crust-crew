import './Menu.css';
import pizzaBox from './images/pizzaBox.png';

function Menu() {
    return (
        <div className="menuBackground">
           <div className="menuContainer"> 
            <div>
                <img src={pizzaBox} alt="Pizza box" className="pizzaBoxImage"></img>
            </div>
            <h2> 
                Menu
            </h2>
            <h3>
                Starters & sharers
            </h3>
            <h5>
                Burrata (v)
            </h5>
            <div className="row menuItem">
                <div className="col-7 itemDescription">
                    Whole burrata, vine tomatoes, wild rocket and our house baked bread.
                </div>
                <div className="col plusMinus">
                    <div>
                    <i class="fa-solid fa-circle-minus"></i>
                    </div>
                    <div>
                        0
                    </div>
                    <div>
                    <i class="fa-solid fa-circle-plus"></i>
                    </div>
                </div>
                <div className="col itemPrice">
                    $11
                </div>
            </div>
           </div>
        </div>
    );
}

export default Menu; 