import { PureComponent } from "react";
/* components */
import { ProductItem } from "components/ProductItem";
import { AdminBut } from "components/AdminBut";
import { LoadingIc } from "components/LoadingIc";
/* styles */
import { GridContainer, GridItem, ProdListCont, GridRow } from "./style";
import { MainTitleText } from "styles/MainTitleText";
/* utils */
import { formProdList } from "./util";
import { apiCall } from "utils/apiCalls";
/* redux */
import { connect } from "react-redux";

class ProductList extends PureComponent {
  constructor(props) {
    super();

    this.mounted = true;

    this.state = {
      formedData: [],
      dataLoaded: false,
    };
  }

  componentDidMount() {
    const size = this.props.oneRow || 9;
    apiCall("get", "getProducts", { page: 1, size }, false, (prodData) => {
      if (this.mounted) {
        this.setState({
          formedData: formProdList(prodData, this.props.oneRow),
          dataLoaded: true,
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <ProdListCont>
        <MainTitleText>{this.props.title}</MainTitleText>
        {this.props.loggedIn && this.props.edit && (
          <AdminBut text="ADD PRODUCT" type="add" link="/produktas/new" />
        )}
        {this.state.dataLoaded ? (
          <GridContainer>
            {this.state.formedData.map((row, rowInd) => (
              <GridRow key={`row-${rowInd}`}>
                {row.map((prod, prodInd) => (
                  <GridItem key={`title-${rowInd}-${prodInd}`}>
                    <ProductItem
                      disabled={prod.disabled}
                      loggedIn={this.props.loggedIn && this.props.edit}
                      id={prod.id}
                      title={prod.title}
                      price={prod.price}
                      primaryPic={prod.primaryPic}
                      secondaryPic={prod.secondaryPic}
                    />
                  </GridItem>
                ))}
              </GridRow>
            ))}
          </GridContainer>
        ) : (
          <LoadingIc />
        )}
      </ProdListCont>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(ProductList);
