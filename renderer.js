const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('server.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
    let sql = `SELECT inventNum, typetext, cabinet.number as cab, statustext, dataEdit FROM list
                JOIN typelist ON list.type = typelist.id
                JOIN statuslist ON list.status = statuslist.id
                JOIN cabinet ON list.cab = cabinet.id`
    db.each(sql, function(err, row) {
        console.log(row.inventNum +' '+ row.typetext +' '+ row.cab +' '+ row.statustext +' '+ row.dataEdit);
    });
    db.close();
});  