import { execute } from './connection'
const getAll = async() => {
    return await execute('SELECT * FROM tasks')
}

export default {
    getAll
}