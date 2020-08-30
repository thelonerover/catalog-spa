import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

export default () => {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });

  return (
    <Menu text>
      <Menu.Item header>Sort By</Menu.Item>
      <Menu.Item
        name="date"
        active={activeItem === "date"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="price"
        active={activeItem === "price"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="name"
        active={activeItem === "name"}
        onClick={handleItemClick}
      />
    </Menu>
  )
}