import { connect } from "react-redux";
import LoginForm from "../../components/LoginForm";
import { login } from "../../actions/userActions";

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (url, email, password) => {
            dispatch(login(url, email, password));
        }
    }
}

const LoginFormContainer = connect(null, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;
