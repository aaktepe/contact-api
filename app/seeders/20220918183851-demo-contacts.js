'use strict';

module.exports = {
  async up ({ context: queryInterface }) {
    await queryInterface.bulkInsert('Contacts', [{
      firstname: 'Abdurrahman',
      lastname: 'Aktepe',
      company: 'Mobilist',
      phone: '+905076426118, +905076426119',
      uid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
       firstname: 'Abdurrahman',
       lastname: 'Aktepe2',
       company: 'Mobilist',
       phone: '+905076426120, +905076426121',
       uid: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },{     
       firstname: 'Abdurrahman',
       lastname: 'Aktepe3',
       company: 'Mobilist',
       phone: '+905076426122, +905076426123',
       uid: 2,
       createdAt: new Date(),
       updatedAt: new Date()
    },{
       firstname: 'Abdurrahman',
       lastname: 'Aktepe4',
       company: 'Mobilist',
       phone: '+905076426124, +905076426125',
       uid: 2,
       createdAt: new Date(),
       updatedAt: new Date()
    }
    ], {});
  }
};
