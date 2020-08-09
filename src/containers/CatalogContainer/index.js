import { connect } from "react-redux";
import Catalog from "../../components/Catalog";
import { getProducts, getProductsPage, getProductPagesNumber } from "../../actions/productsActions";

const mapStateToProps = state => ({
    products: state.items,
    pagesNumber: state.pagesNumber,
    pageOffset: state.pageOffset
});

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
