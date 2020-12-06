import React from "react";
import { withResizeDetector } from "react-resize-detector";
/* styles */
import { MainPic, MainPicWrap } from "./style";

class ZoomPic extends React.Component {
  constructor(props) {
    super();

    this.state = {
      xPerc: 0,
      yPerc: 0,
    };

    this.mainPicHeight = props.height;
    this.mainPicWidth = props.width;
    this.mainPicPosY = 0;
    this.mainPicPosX = 0;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.setMainPicPos = this.setMainPicPos.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document
      .querySelector(".main_scroll")
      .addEventListener("scroll", this.onScroll);
    this.setMainPicPos();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.width !== prevProps.width ||
      this.props.height !== prevProps.height
    ) {
      this.mainPicHeight = this.props.height;
      this.mainPicWidth = this.props.width;
      this.setMainPicPos();
    }
  }

  componentWillUnmount() {
    document
      .querySelector(".main_scroll")
      .removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    this.setMainPicPos();
  }

  setMainPicPos() {
    const rect = document.getElementById("mainPic").getBoundingClientRect();

    this.mainPicPosY = rect.top;
    this.mainPicPosX = rect.left;
  }

  onMouseMove(event) {
    if (!window.innerWidth < 800) {
      const x = event.pageX;
      const y = event.pageY;

      // position within the container
      const xPosInCont = x - this.mainPicPosX;
      const yPosInCont = y - this.mainPicPosY;

      const xPerc = (100 * xPosInCont) / this.mainPicWidth;
      const yPerc = (100 * yPosInCont) / this.mainPicHeight;

      this.setState({ xPerc, yPerc });
    }
  }

  render() {
    const { mainUri } = this.props;

    return (
      <MainPicWrap
        xPerc={this.state.xPerc}
        yPerc={this.state.yPerc}
        id="mainPic"
        backgrImg={mainUri}
        onMouseMove={this.onMouseMove}
      >
        <MainPic isMobile src={mainUri} alt="img" />
      </MainPicWrap>
    );
  }
}

export default withResizeDetector(ZoomPic);
