import {createTable} from '../helper/actionQuery.js'
import {confirmUser} from './index.js'

const columns = `
    userId int(11),
    approvalId tinyint(11),
    adminApprovalId int(11)
`

createTable(confirmUser, columns, true, false)