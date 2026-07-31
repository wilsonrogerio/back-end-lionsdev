class AuthController {
  static async register(req, res) {
    return res.json({ message: "rota de registro funcionando..." });
  }

  static async login(req, res) {
    return res.status(200).json({ message: "Rota de login funcionando 123" });
  }
}

module.exports = AuthController;