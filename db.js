const  Sequelize  = require("sequelize");

module.exports = async () => {
    const sequelize = new Sequelize(process.env.DATABASE || 'people',process.env.DB_USERNAME || 'postgres',process.env.DB_PASSWORD || 'postgres',{
        dialect:'postgres',
        host:process.env.HOST || 'localhost'
    })

    try{
        await sequelize.authenticate();
        
        console.log('Connection has been established successfully.');

        return sequelize;

    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

}

