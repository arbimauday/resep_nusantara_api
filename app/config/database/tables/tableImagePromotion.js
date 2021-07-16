import {createTable} from '../helper/actionQuery.js'
import {imagePromotion} from './index.js'

const columns = `
    promotionId int(11),
    path VARCHAR(255),
    nameFile VARCHAR(255)
`

createTable(imagePromotion, columns, true, false)