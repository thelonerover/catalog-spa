import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { useSelector } from "react-redux";
import RegistrationForm from "../RegistrationForm";
import userStatuses from "../../constants/userStatuses";

export default () => {
    const [open, setOpen] = React.useState(false);
    const user = useSelector(state => state.user);

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
            {user.currentStatus === userStatuses.registrationSuccess &&
            <Modal.Actions>
                <Button color="green" onClick={() => setOpen(false)}>Done!</Button>
            </Modal.Actions>}
        </Modal>
    );
}
