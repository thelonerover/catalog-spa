import { connect } from "react-redux";
import LoginForm from "../../components/LoginForm";
import { registration } from "../../actions/userActions";

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (email, password) => {
            dispatch(registration(email, password));
        }
    }
}

const RegisterFormContainer = connect(null, mapDispatchToProps)(LoginForm);

export default RegisterFormContainer;