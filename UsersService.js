class UsersService {
  constructor() {
    this.users = [];
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(userId) {
      return this.users.find(user => user.id === userId);
  }

  addUser(user) {
      this.user = [user, ...this.users];
  }

  removeUser(userId) {
      this.users = this.users.filter(this.user => user.id !== userId);
  }
}
module.exports = UsersService;