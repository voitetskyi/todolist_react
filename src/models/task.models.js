const db = require('../db')

class TaskModel {
    async createTask(done, name, description,duedate, list_id) {
        const newTask = await db('tasks')
            .insert({done: done, name: name, description: description, duedate: duedate, list_id: list_id})
            .returning('*')
        return newTask
    }

    async getTasks() {
        const tasks = await db.select('*').from('tasks').returning('*')
        return tasks
    }

    async getOneTask(id) {
        const task = await db.select('*').from('tasks').where('id', '=', id).returning('id')
        return task
    }
    
    async getTasksList(id) {
        const tasks = await db.select('*').from('tasks').where('list_id', '=', id).returning('*')
        return tasks
    }
    
    async changeDone(done, name, description, duedate, list_id, id) {
        const task = await db('tasks').update('done', done).where('id','=', id).returning('*')
        return task
    }

    async updateTask(done, name, description, duedate, list_id, id) {
        const task = await db('tasks').update({'name': name, 'description': description, duedate: duedate, list_id: list_id}).where('id','=', id).returning('*')
        return task
    }

    async deleteTask(id) {
        const task = await db('tasks').where('id','=', id).del().returning('*')
        return task
    }
}

module.exports = new TaskModel()

exports