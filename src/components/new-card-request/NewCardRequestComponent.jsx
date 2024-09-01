import {Component} from "react";
import NewCardRequestService from "../../api/NewCardRequestService";
import {Field, Form, Formik} from "formik";

class NewCardRequestComponent  extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName : '',
            lastName: '',
            oib: '',
            submitted: false,
            error: false
        }

        this.valueChanged = this.valueChanged.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    render() {

        let firstName = this.state.firstName
        let lastName = this.state.lastName
        let oib = this.state.oib

        return(
            <div className="container">

                <Formik
                    onSubmit={this.onSubmit}
                    enableReinitialize={true}
                    initialValues={{firstName, lastName, oib}}>
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>First name</label>
                                    <Field className="form-control" type="text" name="firstName"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Last name</label>
                                    <Field className="form-control" type="text" name="lastName"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>OIB</label>
                                    <Field className="form-control" type="text" name="oib"/>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Submit</button>
                            </Form>
                        )
                    }
                </Formik>

                {this.state.submitted && <div className="alert alert-success">New card request sent!</div>}
                {this.state.error && <div className="alert alert-danger">Error occurred, we can't send your card at the moment</div>}
            </div>
        );
    }

    valueChanged(event) {
        this.setState({
                [event.target.name]: event.target.value
            }
        )
    }

    onSubmit(values) {

        NewCardRequestService.createNewCardRequest({
            firstName: values.firstName,
            lastName: values.lastName,
            oib: values.oib
        })
            .then(response => {
                this.setState({submitted: true, error: false})
            })
            .catch(error => {
                this.setState({submitted: false, error: true})
            })
    }
}

export default NewCardRequestComponent;