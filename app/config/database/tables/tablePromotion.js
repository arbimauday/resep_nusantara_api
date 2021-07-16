import {createTable} from '../helper/actionQuery.js'
import {promotion} from './index.js'

const columns = `
    name VARCHAR(255),
    description VARCHAR(255),
    cookingRecipeIds VARCHAR(255),
    createdById int(11)
`

createTable(promotion, columns, true, false)