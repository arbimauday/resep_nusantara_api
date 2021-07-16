import {createTable} from '../helper/actionQuery.js'
import {imageCookingRecipe} from './index.js'

const columns = `
    cookingRecipeId int(11),
    path VARCHAR(255),
    fileName VARCHAR(255)
`

createTable(imageCookingRecipe, columns, true, false)