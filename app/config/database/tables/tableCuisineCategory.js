import {createTable} from '../helper/actionQuery.js'
import {cookingCategory} from './index.js'

const columns = `
    name VARCHAR(255),
    createById int(11),
    isActive BOOLEAN NOT NULL DEFAULT true
`

createTable(cookingCategory, columns, true, false)