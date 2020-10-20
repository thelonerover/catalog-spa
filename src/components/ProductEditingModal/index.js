import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "semantic-ui-react";
import ProductEditingForm from "../ProductEditingForm";

export default () => {
    const products = useSelector(state => state.products);

    return (
        <Modal
            size="mini"
            open={products.showEditingModal}
        >
            <Modal.Header>Edit product</Modal.Header>
            <Modal.Content>
                <ProductEditingForm {...products.currentProduct} />
            </Modal.Content>
        </Modal>
    );
}