import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
/* components */
import { PicViewer } from "./components/PicViewer";
import { ProdActComp } from "./components/ProdActComp";
import { AdminBut } from "components/AdminBut";
/* style */
import { MainDetButCont, MainDetStyle, MainDetStyleIn } from "./style";
/* redux */
import { connect } from "react-redux";
import { AdminActions } from "./components/AdminActions";
/* consts */
import { prodCategories } from "./components/AdminActions/const";
/* utils */
import remove from "lodash/remove";

class MainDetail extends PureComponent {
  constructor(props) {
    super();

    this.title = "";
    this.price = "";
    this.discPrice = "";
    this.desc = "";
    this.category = prodCategories[2];
    this.sizes = [];
    this.imgData = [];

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
    };

    this.addSize = this.addSize.bind(this);
    this.remSize = this.remSize.bind(this);
    this.editSize = this.editSize.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setImgData = this.setImgData.bind(this);
    this.addUpdate = this.addUpdate.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const prodDetail = {
      title: this.title,
      price: this.price,
      desc: this.desc,
      discPrice: this.discPrice,
      category: this.category,
      sizes: this.sizes,
      imgData: this.imgData,
    };

    this.setState(prodDetail);
  }

  addSize(size) {
    this.sizes.push(size);
  }

  remSize(key) {
    remove(this.sizes, (item) => item.key === key);
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

  addUpdate() {
    console.log("this.title", this.title);
    console.log("this.price", this.price);
    console.log("this.discPrice", this.discPrice);
    console.log("this.desc", this.desc);
    console.log("this.category", this.category);
    console.log("this.sizes", this.sizes);
    console.log("this.imgData", this.imgData);
  }

  delete() {
    alert("Are you sure you want to delete the product?");
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
    } = this.state;

    return (
      <MainDetStyle>
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
            />
          ) : (
            <ProdActComp title={title} price={price} desc={desc} />
          )}
        </MainDetStyleIn>
        {loggedIn && (
          <MainDetButCont>
            <AdminBut type="add" text="SAVE PRODUCT" onClick={this.addUpdate} />
            {match.params.id !== "new" && (
              <AdminBut
                type="del"
                text="DELETE PRODUCT"
                onClick={this.delete}
              />
            )}
          </MainDetButCont>
        )}
      </MainDetStyle>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default withRouter(connect(mapStateToProps)(MainDetail));
