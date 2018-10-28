export default {
  getUsers: state => state.users,
  getUser: state => (id) => {
    const user = state.users.filter(u => u.id === id);
    return user;
  },
};
