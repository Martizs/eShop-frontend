import { PureComponent } from "react";
/* components */
import { ProductItem } from "components/ProductItem";
import { AdminBut } from "components/AdminBut";
/* styles */
import { GridContainer, GridItem, ProdListCont, GridRow } from "./style";
import { MainTitleText } from "styles/MainTitleText";
/* utils */
import { formProdList } from "./util";
/* redux */
import { connect } from "react-redux";

class ProductList extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      formedData: formProdList(props.data, props.oneRow),
    };
  }

  render() {
    return (
      <ProdListCont>
        <MainTitleText>{this.props.title}</MainTitleText>
        {this.props.loggedIn && this.props.edit && (
          <AdminBut text="ADD PRODUCT" type="add" link="/produktas/new" />
        )}
        <GridContainer>
          {this.state.formedData.map((row, rowInd) => (
            <GridRow key={`row-${rowInd}`}>
              {row.map((prod, prodInd) => (
                <GridItem key={`title-${rowInd}-${prodInd}`}>
                  <ProductItem
                    loggedIn={this.props.loggedIn && this.props.edit}
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
      </ProdListCont>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(ProductList);
