// eslint-disable-next-line @typescript-eslint/no-var-requires
import { execute } from './connection'

const getAll = async() => {
    return await execute('SELECT * FROM tasks')
}

export default {
    getAll
}