import React from "react";
import { Modal, Button } from "semantic-ui-react";
import ProductEditingForm from "../ProductEditingForm";

export default ({ product }) => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            size="mini"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color="blue" floated="right">Edit</Button>}
            >
            <Modal.Header>Edit product</Modal.Header>
            <Modal.Content >
                <ProductEditingForm product={product} />
            </Modal.Content>
        </Modal>
    );
}
