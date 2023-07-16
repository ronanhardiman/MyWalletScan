import axios from "axios";

const getBtcPrice = async () => {
    try {
        const options = {
            method: 'GET',
            url: 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD',
        }
        let response = await axios.request(options)
        return response.data['USD']
    } catch (e) {
        console.log(e)
        return "/"
    }

}


export default getBtcPrice
