import React, { useState } from "react";
import Box from "./Box";

const Home = () => {
  const [pages, setPages] = useState([
    { isSelected: false },
    { isSelected: false },
    { isSelected: false },
    { isSelected: false },
  ]);

  const isAllSelected = pages.every((page) => page.isSelected);

  const handleToggleAll = () => {
    const newSelectedState = !isAllSelected;
    setPages(pages.map(() => ({ isSelected: newSelectedState })));
  };

  const handleTogglePage = (index) => {
    const newPages = [...pages];
    newPages[index].isSelected = !newPages[index].isSelected;

    // If all pages are selected after toggling, also select "All pages"
    if (newPages.every((page) => page.isSelected)) {
      setPages(newPages);
    } else {
      // Deselect "All pages" if any individual page is deselected
      setPages(newPages);
    }
  };

  const handleHoverAll = () => {
    setPages(pages.map((page) => ({ ...page, hover: true })));
  };

  const handleHoverPage = (index) => {
    const newPages = [...pages];
    newPages[index].hover = true;
    setPages(newPages);
  };

  return (
    <div className="w-[370px] h-[326px] border shadow-md rounded-md">
      <Box
        pages={pages}
        onToggleAll={handleToggleAll}
        onTogglePage={handleTogglePage}
        isAllSelected={isAllSelected}
        onHoverAll={handleHoverAll}
        onHoverPage={handleHoverPage}
      />
    </div>
  );
};

export default Home;
