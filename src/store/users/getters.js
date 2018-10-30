export default {
  getUsers: state => state.users,
  getUser: state => (id) => {
    const user = state.users.filter(u => u.id === Number(id));
    return user[0];
  },
};
