class UsersController {
  static async list(req, res) {
    return res.status(200).json({ message: 'Rota de usuarios Funcionando' })
  }
}

module.exports = UsersController