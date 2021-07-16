import {createTable} from '../helper/actionQuery.js'
import {cookingRecipe} from './index.js'

const columns = `
    name VARCHAR(255),
    recipe VARCHAR(255),
    categoryId int(11),
    confirmStatusId tinyInt(11),
    activeId tinyInt(11),
    statusApprovalId tinyInt(11),
    createdById int(11)
`

createTable(cookingRecipe, columns, true)