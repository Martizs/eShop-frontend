import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
/* components */
import { LoadingIc } from "components/LoadingIc";
import { PicViewer } from "../../../../components/PicViewer";
import { ProdActComp } from "./components/ProdActComp";
import { AdminBut } from "components/AdminBut";
import { AdminActions } from "./components/AdminActions";
/* style */
import { MainDetButCont, MainDetStyle, MainDetStyleIn } from "./style";
/* redux */
import { connect } from "react-redux";
import { addCartItem } from "redux_store/cart/actions";
/* consts */
import { prodCategories } from "./components/AdminActions/const";
/* utils */
import remove from "lodash/remove";
import find from "lodash/find";
import { toast } from "react-toastify";
import { apiCall } from "utils/apiCalls";
import { baskValidation, prodValidation } from "./util";

class MainDetail extends PureComponent {
  constructor(props) {
    super();

    this.mounted = true;

    this.title = "";
    this.price = "";
    this.discPrice = "";
    this.desc = "";
    this.category = prodCategories[2];
    this.noSize = false;
    this.sizes = [];
    this.imgData = [];

    this.selectedSize = null;
    this.selectedAmount = 1;

    // so we use state ONLY to rerender children
    // components when new data comes in
    this.state = {
      title: this.title,
      price: this.price,
      desc: this.desc,
      discPrice: this.discPrice,
      category: this.category,
      sizes: this.sizes,
      imgData: this.imgData,
      dataLoaded: false,
      uploading: false,
    };

    this.addSize = this.addSize.bind(this);
    this.remSize = this.remSize.bind(this);
    this.editSize = this.editSize.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setImgData = this.setImgData.bind(this);
    this.addUpdate = this.addUpdate.bind(this);
    this.delete = this.delete.bind(this);
    this.loadData = this.loadData.bind(this);
    this.setNoSize = this.setNoSize.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
    this.userSelSize = this.userSelSize.bind(this);
    this.setSelAmount = this.setSelAmount.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.scrollTop();
      this.setState({ dataLoaded: false }, () => this.loadData());
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  loadData() {
    const { id } = this.props.match.params;

    if (id !== "new") {
      apiCall(
        "get",
        "getProduct",
        { id },
        false,
        (prod) => {
          const newProd = prod;
          newProd.category = find(prodCategories, ["key", prod.category]);
          newProd.dataLoaded = true;

          this.title = newProd.title;
          this.price = newProd.price + "";
          this.discPrice = newProd.discPrice + "";
          this.desc = newProd.desc;
          this.category = newProd.category;
          this.sizes = newProd.sizes?.map((size) => {
            return {
              ...size,
              amount: size.amount + "",
              disabled: size.amount < 1,
              disabledText: " - išbarduota",
            };
          });
          this.imgData = newProd.imgData;
          this.noSize =
            newProd.sizes && newProd.sizes[0] && !newProd.sizes[0].name
              ? true
              : false;

          this.selectedSize = this.noSize ? newProd.sizes[0] : null;

          if (this.mounted) {
            this.setState({
              ...newProd,
              sizes: this.sizes,
            });
          }
        },
        () => {
          this.props.history.push("/nerasta");
        }
      );
    } else {
      if (this.props.loggedIn) {
        this.setState({ dataLoaded: true });
      } else {
        this.props.history.push("/nerasta");
      }
    }
  }

  addSize(size) {
    this.sizes.push(size);
  }

  remSize(_id) {
    remove(this.sizes, (item) => item._id === _id);
  }

  editSize(index, value, name) {
    if (name) {
      this.sizes[index].name = value;
    } else {
      this.sizes[index].amount = value;
    }
  }

  setSize(sizes) {
    this.sizes = sizes;
  }

  setImgData(imgData) {
    this.imgData = imgData;
  }

  setNoSize(value) {
    this.noSize = value;
  }

  addUpdate() {
    const {
      title,
      price,
      discPrice,
      desc,
      category,
      sizes,
      imgData,
      noSize,
    } = this;
    const { id } = this.props.match.params;

    const valMsg = prodValidation(title, price, noSize, sizes, imgData);
    if (valMsg === 1) {
      const formData = new FormData();
      if (id !== "new") {
        formData.append("id", id);
      }
      formData.append("title", title);
      formData.append("price", price);
      formData.append("discPrice", discPrice);
      formData.append("desc", desc);
      formData.append("category", category?.key);
      formData.append("sizes", JSON.stringify(sizes));

      const adjImgData = [];
      imgData.forEach((img) => {
        if (img.rawImg) {
          formData.append("file", img.rawImg);
        }
        adjImgData.push({
          filename: img.filename,
          key: img.key,
          primary: img.primary,
          secondary: img.secondary,
          imgUrl: img.imgUrl,
        });
      });

      formData.append("imgData", JSON.stringify(adjImgData));

      apiCall("post", "updateCreate", formData, true, () => {
        this.props.history.push("/parduotuve");
      });
    } else {
      this.setState({ uploading: false });
      toast.error(valMsg);
    }
  }

  delete() {
    if (window.confirm("Are you sure you want to delete the product?")) {
      const { id } = this.props.match.params;
      apiCall("post", "delProd", { id }, true, () => {
        this.props.history.push("/parduotuve");
      });
    } else {
      this.setState({ uploading: false });
    }
  }

  userSelSize(size) {
    this.selectedSize = size;
  }

  setSelAmount(amount) {
    this.selectedAmount = amount;
  }

  addToBasket() {
    const baskVal = baskValidation(
      this.selectedSize,
      this.selectedAmount,
      this.noSize,
      this.sizes
    );

    if (baskVal !== 1) {
      toast.error(baskVal);
    } else {
      const { id } = this.props.match.params;
      this.props.dispatch(
        addCartItem({
          prodId: id,
          key: Math.random().toString(36).substr(2, 10),
          title: this.title,
          selectedSize: this.selectedSize,
          price:
            this.discPrice.length && this.discPrice !== "null"
              ? this.discPrice
              : this.price,
          selectedAmount: this.selectedAmount,
          img: find(this.imgData, "primary"),
        })
      );
      this.props.history.push("/parduotuve");
    }
  }

  render() {
    const { loggedIn, match } = this.props;

    const {
      title,
      price,
      desc,
      discPrice,
      category,
      sizes,
      imgData,
      dataLoaded,
    } = this.state;

    return (
      <MainDetStyle>
        {dataLoaded ? (
          <>
            <MainDetStyleIn>
              <PicViewer
                loggedIn={loggedIn}
                imgData={imgData}
                setImgData={this.setImgData}
              />
              {loggedIn ? (
                <AdminActions
                  title={title}
                  price={price}
                  desc={desc}
                  discPrice={discPrice}
                  category={category}
                  titleChange={(event) => (this.title = event.target.value)}
                  priceChange={(event) => (this.price = event.target.value)}
                  descChange={(event) => (this.desc = event.target.value)}
                  onCatSelect={(item) => (this.category = item)}
                  discChange={(event) => (this.discPrice = event.target.value)}
                  defSizes={sizes}
                  addSize={this.addSize}
                  remSize={this.remSize}
                  editSize={this.editSize}
                  setSize={this.setSize}
                  setNoSize={this.setNoSize}
                />
              ) : (
                <ProdActComp
                  title={title}
                  price={price}
                  discPrice={discPrice}
                  desc={desc}
                  defSizes={sizes}
                  userSelSize={this.userSelSize}
                  addToBasket={this.addToBasket}
                  setSelAmount={this.setSelAmount}
                />
              )}
            </MainDetStyleIn>
            {loggedIn && (
              <MainDetButCont>
                {this.state.uploading ? (
                  <LoadingIc />
                ) : (
                  <>
                    <AdminBut
                      type="add"
                      text="SAVE PRODUCT"
                      onClick={() =>
                        this.setState(
                          {
                            uploading: true,
                          },
                          () => this.addUpdate()
                        )
                      }
                    />
                    {match.params.id !== "new" && (
                      <AdminBut
                        type="del"
                        text="DELETE PRODUCT"
                        onClick={() =>
                          this.setState(
                            {
                              uploading: true,
                            },
                            () => this.delete()
                          )
                        }
                      />
                    )}
                  </>
                )}
              </MainDetButCont>
            )}
          </>
        ) : (
          <LoadingIc />
        )}
      </MainDetStyle>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainDetail)
);
