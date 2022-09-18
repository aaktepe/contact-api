'use strict';

module.exports = {
  async up ({ context: queryInterface }) {
    await queryInterface.bulkInsert('Users', [{
     username: 'Test Abdurrahman',
     email: 'aktepe@example.com',
     password: '$2a$08$i1zRzSHXeIcdQFiArVnwEu/c.5K7EKJCImAOrIgFkCYWxFbHypM3e',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     username: 'Test Abdurrahman2',
     email: 'aktepe2@example.com',
     password: '$2a$08$i1zRzSHXeIcdQFiArVnwEu/c.5K7EKJCImAOrIgFkCYWxFbHypM3e',
     createdAt: new Date(),
     updatedAt: new Date()
    }
   ], {});
   }
};
