import {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NewCardRequestComponent from "../new-card-request/NewCardRequestComponent";
import HeaderComponent from "../common/HeaderComponent";
import FooterComponent from "../common/FooterComponent";

class CardFactoryComponent  extends Component {

    render() {
        return(
            <div>
                <Router>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<NewCardRequestComponent/>} />
                        <Route path="/home" element={<NewCardRequestComponent/>} />
                        <Route path="/new-card-request" element={<NewCardRequestComponent/>} />
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

export default CardFactoryComponent