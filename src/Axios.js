const axios = require('axios');

const AxiosClient = () => {

    async function addTask(task) {
        let response = await axios.post('http://localhost:8080/api/task', task)
        return response.data[0]
    }

    async function deleteTask(id) {
        const endpointTask = 'http://localhost:8080/api/task/' + id
        await axios.delete(endpointTask)
    }

    async function changeTask(changed_task) {
        const endpointTask = 'http://localhost:8080/api/task/' + changed_task.id
        await axios.put(endpointTask, changed_task)
    }

    async function changeDone(task) {
        const endpointTask = 'http://localhost:8080/api/task/' + task.id
        await axios.patch(endpointTask, task)
    }

    async function addList(list) {
        let response = axios.post('http://localhost:8080/api/list', list)
        return response.data[0]
    }

    async function deleteList(id) {
        const endpointTask = 'http://localhost:8080/api/list/' + id
        await axios.delete(endpointTask)
    }
    
}

export default AxiosClient