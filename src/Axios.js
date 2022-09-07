const axios = require('axios');

const AxiosClient = {

    async addTask(task) {
        let response = await axios.post('http://localhost:8080/api/task', task)
        return response.data[0]
    },

    async deleteTask(id) {
        const endpointTask = 'http://localhost:8080/api/task/' + id
        await axios.delete(endpointTask)
    },

    async changeTask(changed_task) {
        const endpointTask = 'http://localhost:8080/api/task/' + changed_task.id
        await axios.put(endpointTask, changed_task)
    },

    async changeDone(task) {
        const endpointTask = 'http://localhost:8080/api/task/' + task.id
        await axios.patch(endpointTask, task)
    },

    async addList(list) {
        let response = axios.post('http://localhost:8080/api/list', list)
        return response.data[0]
    },

    async deleteList(id) {
        const endpointTask = 'http://localhost:8080/api/list/' + id
        await axios.delete(endpointTask)
    },

    async fetchLists() {
        let response = await axios.get('http://localhost:8080/api/lists')
        return response.data
    }
    
}

export default AxiosClient