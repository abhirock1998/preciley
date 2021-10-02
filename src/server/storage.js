let path = require("path");
let fs = require("fs");

/**
 * @class Storage helps in managing the state persistancy
 */

class Storage {
  constructor() {
    let userDataFile = __dirname;
    this.path = path.join(userDataFile, "userdata.json");
  }

  /**
   * @param data the data that needs to be saved in the database
   * @function saveData helps to save the data
   */
  saveData(data) {
    let content = JSON.stringify(data);
    fs.writeFile(this.path, content, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  /**
   * @function getData this function will get the json data from the user data folder
   * @returns a promise that will resolve into either data or error
   */
  getData() {
    return new Promise((resolve, reject) => {
      if (!fs.existsSync(this.path)) {
        resolve([]);
      }
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (!err) {
          resolve(JSON.parse(data));
        } else {
          reject(err);
        }
      });
    });
  }
  /**
   * @function deleteData this function get triggered by the user in development ENV
   * @returns just clear the  existing data in userData.json file
   * */
  deleteData() {
    return fs.writeFile(this.path, "", function () {
      console.log("File Is Cleared Done !!!! ");
    });
  }
}

module.exports = Storage;
