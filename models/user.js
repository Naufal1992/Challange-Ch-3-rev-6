'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt' )
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.detail, {foreignKey:'id_user'});
      // this.hasOne(models.point, {foreignKey:'id_user'});
    }
    // Method untuk melakukan enkripsi
    static #encrypt = (password) => bcrypt.hashSync (password, 10)
    static register = ({ username, password }) => {
      const encryptedPassword = this.#encrypt(password)
      return this.create({ username, password : encryptedPassword, isSuperAdmin : false})
    }

    checkPassword = password => bcrypt.compareSync(password, this.password)

    generateToken = () => {
      //PAYLOAD = ABC
      const abc = {
      id: this.id,
      username: this.username
      }

      //SECRET PASSWORD = QWE
      const qwe = 'xxxxyyyy'
      const token = jwt.sign(abc,qwe)
      return token
    }
    
    // remind me bagian ini user di ganti dengan userx
    static authenticate = async ({ username, password })=> {
      try {
        const userx = await this.findOne({ where: { username }})
        if (!userx) return Promise.reject("User not found!")

        const isPasswordValid = userx.checkPassword(password)

        if (!isPasswordValid) return Promise.reject("Wrong password")
        return Promise.resolve(userx)
      }

      catch(err) {
      return Promise.reject(err)
      }
    }
};

  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isSuperAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};