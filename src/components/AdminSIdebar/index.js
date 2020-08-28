import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

export default function() {
    const [activeItem, setActiveItem] = useState("products");

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu pointing secondary vertical>
            <Menu.Item
                name="products"
                active={activeItem === "products"}
                onClick={handleItemClick}
            />
            <Menu.Item
                name="test"
                active={activeItem === "test"}
                onClick={handleItemClick}
            />
        </Menu>
    );
}