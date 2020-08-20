import { connect } from "react-redux";
import RegisterForm from "../../components/RegisterForm";
import { registration } from "../../actions/userActions";

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (credentials) => {
            dispatch(registration(credentials));
        }
    }
}

const RegisterFormContainer = connect(null, mapDispatchToProps)(RegisterForm);

export default RegisterFormContainer;