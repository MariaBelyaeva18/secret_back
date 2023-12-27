exports.up = (pgm) => {
  pgm.createTable('messages', {
    id: 'id',
    message: { type: 'varchar', notNull: true },
    keys: { type: 'varchar' },
    iv: { type: 'varchar' },
    route: { type: 'varchar' },
  });
};
