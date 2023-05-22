const initialState = {
  menuOpen: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'MENU_CLICKED':
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    default:
      return state;
  }
}

export default reducer;
