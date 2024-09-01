import {Component} from "react";

class MenuComponent  extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.newCardRequest = this.newCardRequest.bind(this);
    }

    render() {
        return(
            <div className="menuComponent">
                <button onClick={this.newCardRequest}>New Card Request</button>
            </div>
        );
    }

    newCardRequest() {

        this.props.navigate("/new-card-request");
    }
}

export default MenuComponent