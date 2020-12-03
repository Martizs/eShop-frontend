import { PureComponent } from "react";
/* components */
import { ProductItem } from "components/ProductItem";
import { AdminBut } from "components/AdminBut";
import { LoadingIc } from "components/LoadingIc";
import ReactPaginate from "react-paginate";
/* styles */
import "./prodList.css";
import {
  GridContainer,
  GridItem,
  ProdListCont,
  GridRow,
  InnerCont,
  BackPagArrow,
  ForwPagArrow,
} from "./style";
import { MainTitleText } from "styles/MainTitleText";
/* utils */
import { formProdList } from "./util";
import { apiCall } from "utils/apiCalls";
/* redux */
import { connect } from "react-redux";
import { CatNav } from "./components/CatNav";

class ProductList extends PureComponent {
  constructor(props) {
    super();

    this.mounted = true;

    this.size = props.oneRow || 9;
    this.cat = "all";

    this.state = {
      formedData: [],
      dataLoaded: false,
      pageCount: 1,
      page: 1,
    };

    this.catClick = this.catClick.bind(this);
    this.loadData = this.loadData.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    this.loadData(this.state.page, this.size, this.cat);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(prevProps) {
    if (this.props.noId !== prevProps.noId) {
      this.loadData(this.state.page, this.size, this.cat);
    }
  }

  loadData(page, size, cat) {
    this.setState({ dataLoaded: false }, () =>
      apiCall(
        "get",
        "getProducts",
        { page, size, cat, rand: this.props.rand, noId: this.props.noId },
        false,
        (prodData) => {
          if (this.mounted) {
            const pageCount = prodData.count / 9;

            this.setState({
              page,
              pageCount,
              formedData: formProdList(prodData.products, this.props.oneRow),
              dataLoaded: true,
            });
          }
        }
      )
    );
  }

  onPageChange({ selected }) {
    const page = selected + 1;
    this.loadData(page, this.size, this.cat);
  }

  catClick(type) {
    this.cat = type;
    this.loadData(1, this.size, this.cat);
  }

  render() {
    return (
      <ProdListCont>
        <MainTitleText>{this.props.title}</MainTitleText>
        {this.props.loggedIn && this.props.edit && (
          <AdminBut text="ADD PRODUCT" type="add" link="/produktas/new" />
        )}
        {this.props.shop && <CatNav onCatClick={this.catClick} />}
        <InnerCont innerCont={this.props.shop}>
          {this.state.dataLoaded ? (
            <>
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
              {this.props.shop && this.state.pageCount > 1 && (
                <ReactPaginate
                  previousLabel={<BackPagArrow />}
                  nextLabel={<ForwPagArrow />}
                  breakLabel={"..."}
                  breakClassName={"page"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.onPageChange}
                  containerClassName={"pagination"}
                  pageClassName={"page"}
                  activeClassName={"active"}
                  forcePage={this.state.page - 1}
                />
              )}
            </>
          ) : (
            <LoadingIc />
          )}
        </InnerCont>
      </ProdListCont>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(ProductList);
