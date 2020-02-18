module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'thiago',
  database: 'fastfeet',
  define: {
    timestamps: true, // uma coluna com armazenamento de edição da tabela
    underscored: true, // que utilizar o padão de escrita com o padrão underscored
    underscoredAll: true, //
  },
};
