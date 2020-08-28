import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateProductForm from "../../components/CreateProductForm";
 
export default function LoginPage() {
    const user = useSelector(state => state.user);

    return (
        <div>
            <h1>Create product</h1>
            <CreateProductForm />
        </div>
    );
}