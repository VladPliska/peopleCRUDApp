const  Sequelize  = require("sequelize");

module.exports = async () => {
    const sequelize = new Sequelize('people','postgres','postgres',{
        dialect:'postgres',
        host:'localhost'
    })

    try{
        await sequelize.authenticate();
        
        console.log('Connection has been established successfully.');

        return sequelize;

    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

}

