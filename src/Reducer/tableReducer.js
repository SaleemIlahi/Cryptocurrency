export const tableReducer = (state, action) => {
  switch (action.type) {
    case "TABLE_DATA":
      return {
        ...state,
        data: action.data,
      };

    default:
      return [];
  }
};
