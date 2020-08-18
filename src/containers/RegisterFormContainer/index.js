import { connect } from "react-redux";
import RegisterForm from "../../components/RegisterForm";
import { registration } from "../../actions/userActions";

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (url, email, password) => {
            dispatch(registration(url, email, password));
        }
    }
}

const RegisterFormContainer = connect(null, mapDispatchToProps)(RegisterForm);

export default RegisterFormContainer;