import mysql from "mysql2/promise";

async function connectDB() {
    return await mysql.createConnection({
        "password":"",
        "host":"localhost",
        "user":"root",
        "port":"3306",
        "database":"marosa_bd"
    })
}

export default {connectDB}