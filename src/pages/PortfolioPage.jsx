import React, { useState } from "react";
import Title from "../components/title";
import Portfolios from "../components/myPortfolios";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";

const allCategories = [
  "All",
  ...new Set(Portfolios.map((item) => item.category)),
];

function PortfolioPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(Portfolios);

  const filter = (category) => {
    const filteredData = Portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"Portfolios"} span={"portfolios"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfolioPage;
