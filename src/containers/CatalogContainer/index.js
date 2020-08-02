import { connect } from "react-redux";
import Catalog from "../../components/Catalog";
import { getProducts } from "../../actions/productsActions";

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => {
            dispatch(getProducts());
        }
    }
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
