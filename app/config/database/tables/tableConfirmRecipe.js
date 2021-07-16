import {createTable} from '../helper/actionQuery.js'
import {confirmCookingRecipe} from './index.js'

const columns = `
    cookingRecipeId int(11),
    description VARCHAR(255),
    adminApprovalId int(11)
`

createTable(confirmCookingRecipe, columns, true)