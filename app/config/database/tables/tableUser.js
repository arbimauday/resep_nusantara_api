import {createTable} from '../helper/actionQuery.js'
import {user} from './index.js'

const columns = `
    userName VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    status VARCHAR(255),
    confirmStatusId tinyint(11),
    statusApprovalId tinyint(11),
    levelId tinyint(11)
`

createTable(user, columns, true)