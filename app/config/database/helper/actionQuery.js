import nusantaraDB from '../connect/nusantaraDB.js'

export const createTable = (name, columns = '', isWithoutTimestamp = false, isUUID = true, isID = true) => {
    try {

        let sqlTableExists =  'SHOW TABLES LIKE "' + name + '"';
        nusantaraDB.query(sqlTableExists, (err, res) => {
            if (!err && !res.length) {

                if (isID) {columns = 'id int NOT NULL AUTO_INCREMENT, PRIMARY KEY (id), ' + columns}

                if (isUUID) {columns = columns + ', uuid VARCHAR(255)'}

                if (isWithoutTimestamp) {
                    columns = columns + ', createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP'
                }

                let sql = 'CREATE TABLE ' + name + '(' + columns + ')';
                nusantaraDB.query(sql, (err, result) => {
                    if (err) throw err;
                    console.log('Success created table ' + name)
                })

            } else {
                console.log('Table ' + name + ' already exists')
            }
        })

    } catch (err) {
        console.log('Catch DB ' + name + ' : ' + JSON.stringify(err))
    }
}