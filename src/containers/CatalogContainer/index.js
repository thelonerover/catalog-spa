import { connect } from "react-redux";
import Catalog from "../../components/Catalog";
import { getProductsPage, getProductPagesNumber } from "../../actions/productsActions";

const mapStateToProps = state => {
    return {
        products: state.products.items,
        pagesNumber: state.products.pagesNumber,
}};

const mapDispatchToProps = dispatch => {
    return {
        getProductsPage: page => {
            dispatch(getProductsPage(page));
        },

        getProductPagesNumber: offset => {
            dispatch(getProductPagesNumber(offset));
        }, 
    }
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
