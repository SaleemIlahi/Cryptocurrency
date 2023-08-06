import { createContext, useReducer } from "react";
import { tableReducer } from "../Reducer/tableReducer";

export const TableContext = createContext();

const TableContextAPI = ({ children }) => {
  const initialState = {
    data: [],
  };
  const [tableState, tableDispatch] = useReducer(tableReducer, initialState);
  return (
    <TableContext.Provider value={{ tableState, tableDispatch }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContextAPI;
