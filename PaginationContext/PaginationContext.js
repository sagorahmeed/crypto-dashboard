import { createContext, useContext, useState } from "react";
const PaginationContext = createContext();
export const usePaginationContext = () => useContext(PaginationContext);
export default function PaginationProvider({ children }) {
    const [isLoading, setLoading] =useState(false)
    const [showEndDatePlaceholder, setShowEndDatePlaceholder] = useState(true);
    const [startDate, setStartDate] = useState('meme');
    const [filterData,setFilterData]=useState('')


  const value = {isLoading, setLoading, startDate, setStartDate,filterData,setFilterData};
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
}