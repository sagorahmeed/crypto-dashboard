import { useEffect, useState } from 'react';
import useCollapse from "react-collapsed";

const Collapse = ({isActive, children}) => {
  const [isExpanded, setExpanded] = useState(isActive);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded
  });

  useEffect(() => {
    setExpanded(isActive);
  }, [isActive, setExpanded]);

  return (
    <div {...getCollapseProps()}>
      {children}
    </div>
  )
}

export default Collapse;