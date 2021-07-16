import {createTable} from '../helper/actionQuery.js'
import {imageProfile} from './index.js'

const columns = `
    profileId int(11),
    path VARCHAR(255),
    fileName VARCHAR(255),
    status VARCHAR(255)
`

export default createTable(imageProfile, columns, true, false)