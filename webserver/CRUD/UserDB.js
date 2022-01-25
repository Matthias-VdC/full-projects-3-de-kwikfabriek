const {
    DatabaseFactory
} = require('./databaseFactory');


const {
    User
} = require('./user.js');


class UserDB {
    getVerbinding() {
        let databaseFactory = new DatabaseFactory();
        return databaseFactory.getDatabase();
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.getVerbinding().voerSqlQueryUit("SELECT * FROM users").then((resultaat) => {
                let resultatenArray = [];
                resultaat.map((value) => {
                    resultatenArray.push(this.converteerQueryNaarObject(value));
                });
                resolve(resultatenArray);
                console.log(resultatenArray);
            });
        });
    }

    getUserFromUserID(UserID) {
        return new Promise((resolve, reject) => {
            this.getVerbinding().voerSqlQueryUit("SELECT * FROM users WHERE id = ?", [UserID]).then((resultaat) => {
                resultaat = this.converteerQueryNaarObject(resultaat)
                resolve(resultaat);
                console.log(resultaat);
            });
        });
    }

    checkPassword(username, password) {
        return new Promise((resolve, reject) => {
            this.getVerbinding().voerSqlQueryUit("SELECT * FROM users WHERE username = ?", [username]).then((resultaat) => {
                resultaat = this.converteerQueryNaarObject(resultaat)
                bcrypt.compare(password, resultaat.password, function (err, result) {
                    if (result == true) {
                        resolve(resultaat)
                    } else {
                        resolve(false);
                    }
                });
            });
        });
    }

    createUser(username, password) {
        return new Promise((resolve, reject) => {
            this.hashPass(password).then(hashedPassword => {
                this.getVerbinding().voerSqlQueryUit("INSERT INTO users (name, password) VALUES (?, ?)", [username, hashedPassword]).then(() => {
                    this.getUserFromEmail(username).then((value) => {
                        resolve(value);
                    });
                });
            });
        });
    }

    hashPass(password) {
        return new Promise((resolve, reject) => {
            // bcrypt werkt blijkbaar niet meer -> oplossing zoeken naar nieuwe dependency
            resolve(password);
        })
    }

    converteerQueryNaarObject(query) {
        return new User(query.id, query.username, query.password);
    }
}

exports.UserDB = UserDB;