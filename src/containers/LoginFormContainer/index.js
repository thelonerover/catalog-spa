import { connect } from "react-redux";
import LoginForm from "../../components/LoginForm";
import { loginRequest } from "../../actions/userActions";

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (email, password) => {
            dispatch(loginRequest(email, password));
        }
    }
}

const LoginFormContainer = connect(null, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;
