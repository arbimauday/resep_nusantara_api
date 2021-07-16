import nusantaraDB from '../../config/database/connect/nusantaraDB'

const db = nusantaraDB
const permission = true

export const categoryModel = {
    get: (filter = '') => {
        let sql = 'SELECT * FROM ' + filter
        db.query(sql, (err, result) => {

        })
    },
    add: () => {

    },

}
