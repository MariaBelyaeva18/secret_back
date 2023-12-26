exports.up = (pgm) => {
  pgm.createTable('messages', {
    id: 'id',
    message: { type: 'varchar', notNull: true },
    key: { type: 'varchar' },
    link: { type: 'varchar' },
  });
};
