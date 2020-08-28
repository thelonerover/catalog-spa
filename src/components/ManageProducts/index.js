import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Menu, Grid } from "semantic-ui-react";
import { Switch, Route, Link } from "react-router-dom";
import CreateProductForm from "../CreateProductForm";
 
export default function ManageProducts() {
    return (
        <CreateProductForm />
    );
}