import {createTable} from '../helper/actionQuery.js'
import {province} from './index.js'

const columns = `
    name VARCHAR(255)
`

createTable(province, columns, true, false)