import { connect } from "react-redux";
import Catalog from "../../components/Catalog";
import { getProductsPage } from "../../actions/productsActions";

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getProductsPage: page => {
            dispatch(getProductsPage(page));
        }
    }
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
