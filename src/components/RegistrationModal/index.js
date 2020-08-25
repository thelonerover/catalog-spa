import React from "react";
import { useSelector } from "react-redux";
import { Modal, Button } from "semantic-ui-react";
import RegistrationForm from "../RegistrationForm";

export default function RegistrationModal() {
    const user = useSelector(state => state.user);
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
