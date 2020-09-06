import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQueryParams, getProductsRequest } from "../../store/actions/productsActions";
import { Menu } from "semantic-ui-react";

export default () => {
  const [sortType, setSortType] = useState("");
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);

  useEffect(() => () => {
    dispatch(setQueryParams({}));
  }, []);

  useEffect(() => {
    isInitialMount.current ? isInitialMount.current = false : dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
  }, [sortType]);
  
  const handleItemClick = (e, { name }) => {
    setSortType(name);
    dispatch(setQueryParams({sort: name}));
  };

  return (
    <Menu text>
      <Menu.Item header>Sort By</Menu.Item>
      <Menu.Item
        name="date"
        active={sortType === "date"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="price"
        active={sortType === "price"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="name"
        active={sortType === "name"}
        onClick={handleItemClick}
      />
    </Menu>
  )
}