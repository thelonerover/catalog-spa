import { connect } from "react-redux";
import Catalog from "../../components/Catalog";
import { getProducts, getProductPagesNumber, setProductsPage } from "../../actions/productsActions";

const mapStateToProps = state => {
    return {
        products: state.products.items,
        pagesNumber: state.products.pagesNumber,
        page: state.products.page
}};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: url => {
            dispatch(getProducts(url));
        },

        getProductPagesNumber: (url, offset) => {
            dispatch(getProductPagesNumber(url, offset));
        }, 

        setProductsPage: page => {
            dispatch(setProductsPage(page));
        }
    }
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
