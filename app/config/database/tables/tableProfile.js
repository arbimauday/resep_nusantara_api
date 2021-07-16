import {createTable} from '../helper/actionQuery.js'
import {profile} from './index.js'

const columns = `
    id_user int(11),
    fullName VARCHAR(255),
    age tinyint(255),
    imageProfileId int(11),
    provinceId int(11)
`

createTable(profile, columns, true)