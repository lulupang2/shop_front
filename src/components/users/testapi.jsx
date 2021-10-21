import axios from 'axios'

class testapi {
    executeHelloService() {
        console.log('executed service')
        return axios.get('http://localhost:8090/login');        
    }
}

export default new testapi()