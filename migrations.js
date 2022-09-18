const { Umzug, SequelizeStorage } = require('umzug');
const { sequelize } = require('./app/models/index.js');

var migrationsConfig = {
  migrations: { glob: './app/migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
};

var seedersConfig = {
  migrations: { glob: './app/seeders/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
};

const migrator = new Umzug(migrationsConfig);
const seeder = new Umzug(seedersConfig);

async function migrate() {
  return migrator.up().then(() => seeder.up());
}

module.exports = () => migrate();