const state = { user: { name: 'Alice' }, loggedIn: true };
const newState = { ...state };
newState.user.name = 'Bob';
console.log(state.user.name);