import React from "react";
import { useSelector } from "react-redux";
import { Modal, Button } from "semantic-ui-react";
import LoginForm from "../LoginForm";

export default function LoginModal() {
    const user = useSelector(state => state.user);
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            size="mini"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button primary>Log in</Button>}
            >
            <Modal.Header>Log in</Modal.Header>
            <Modal.Content >
                <LoginForm />
            </Modal.Content>
        </Modal>
    );
}
