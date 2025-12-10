const routerAtendimento = require("./rotas");
module.exports = (app) => {
  app.use(routerAtendimento);
};
