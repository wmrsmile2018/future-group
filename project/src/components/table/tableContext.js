import  { useContext } from 'react';

const TableContext = React.createContext();
// v2___________________-
// const AlertToggleContext = React.createContext();

export const useTable = () => {
  return useContext(TableContext)
}

export default function TableProvider({ children, rows }) {
    return (
      <TableContext.Provider values={{
          rows: rows
        }}>
        { children }
      </TableContext.Provider>
    )
}
