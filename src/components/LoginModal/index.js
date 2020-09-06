import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "semantic-ui-react";
import { logout } from "../../store/actions/userActions";
import LoginForm from "../LoginForm";

export default () => {
    const [open, setOpen] = React.useState(false);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = e => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        user.isLoggedIn ?
        <Form mathod="POST" action="logout" onSubmit={e => {e.preventDefault()}}>
            <Button onClick={handleLogout}>Log out</Button>
        </Form> : 
        <Modal
            size="mini"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button primary>Log in</Button>}
            >
            <Modal.Header>Log in</Modal.Header>
            <Modal.Content>
                <LoginForm />
            </Modal.Content>
        </Modal>
    );
}
