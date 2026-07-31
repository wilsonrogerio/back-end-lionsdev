class AuthController {
  static async register(req, res) {
    return res.json({ message: "rota de registro funcionando..." })
  }
}

module.exports = AuthController;