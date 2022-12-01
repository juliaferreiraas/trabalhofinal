'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('produtos', [
        { nome: 'celular', preco: '600.00', descricao: 'celular apple', imagem: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617559'},
        { nome: 'celular', preco: '600.00', descricao: 'celular samsung', imagem: 'https://images.samsung.com/is/image/samsung/p6pim/br/2202/gallery/br-galaxy-a53-5g-a536-sm-a536elbgzto-531544867?$650_519_PNG$'},
        { nome: 'celular', preco: '600.00', descricao: 'celular samsung', imagem: 'https://images.samsung.com/is/image/samsung/p6pim/br/2202/gallery/br-galaxy-a53-5g-a536-sm-a536elbgzto-531544867?$650_519_PNG$'}
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
