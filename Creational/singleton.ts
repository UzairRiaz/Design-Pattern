
class DBConnection {
    static instance: DBConnection | null = null;
    constructor() {
        if (!DBConnection.instance) {
            DBConnection.instance = DBConnection;
            return DBConnection.instance;
        } else {
            return DBConnection.instance;
        }
    }
}

const singleton = new DBConnection();
const singleton2 = new DBConnection();

console.log(singleton === singleton2); // true