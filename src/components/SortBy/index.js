import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQueryParams, getProductsRequest } from "../../store/actions/productsActions";
import { Menu } from "semantic-ui-react";

export default () => {
  const [sort, setSort] = useState({ type: "", order: true});
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);

  useEffect(() => () => {
    dispatch(setQueryParams({}));
  }, []);

  useEffect(() => {
    if (!isInitialMount.current) {
      dispatch(setQueryParams({sort: `${sort.type}-${sort.order ? "decrease" : "increase"}`}));

    }
  }, [sort]);

  useEffect(() => {
    isInitialMount.current ? isInitialMount.current = false : dispatch(getProductsRequest({page: products.page, queryParams: products.queryParams}));
  }, [products.queryParams.sort]);
  
  const handleItemClick = (e, { name }) => {
    if (sort.type === name) {
      setSort({...sort, order: !sort.order});
    } else {
      setSort({...sort, type: name, order: true});
    }
  };

  return (
    <Menu text>
      <Menu.Item header>Sort By</Menu.Item>
      <Menu.Item
        name="date"
        active={sort.type === "date"}
        onClick={handleItemClick}
        content={`Date${sort.type === "date" ? sort.order ? " ▼" : " ▲" : ""}`}
      />
      <Menu.Item
        name="price"
        active={sort.type === "price"}
        onClick={handleItemClick}
        content={`Price${sort.type === "price" ? sort.order ? " ▼" : " ▲" : ""}`}
      />
      <Menu.Item
        name="name"
        active={sort.type === "name"}
        onClick={handleItemClick}
        content={`Name${sort.type === "name" ? sort.order ? " ▼" : " ▲" : ""}`}
      />
    </Menu>
  )
}