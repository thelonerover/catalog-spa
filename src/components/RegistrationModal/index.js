import React from "react";
import { Modal, Button } from "semantic-ui-react";
import RegistrationForm from "../RegistrationForm";

export default () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            size="mini"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button basic>Register</Button>}
            >
            <Modal.Header>Register</Modal.Header>
            <Modal.Content >
                <RegistrationForm />
            </Modal.Content>
        </Modal>
    );
}
