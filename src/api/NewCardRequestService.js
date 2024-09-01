import axios from "axios";

class NewCardRequestService {

    createNewCardRequest(newCardRequest) {
        return axios.post('http://localhost:8080/api/v1/card-request', newCardRequest);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new NewCardRequestService()