import React from "react";
/* styles */
import {
  TextInputCont,
  TextAreaCont,
  TextInpMainCont,
  InpLabel,
  InpLabelCont,
  LabelAst,
} from "./style";

export class TextInput extends React.PureComponent {
  constructor(props) {
    super();
    this.TextCont = props.type === "textarea" ? TextAreaCont : TextInputCont;
    this.type = props.type || "text";
  }

  render() {
    const { TextCont, type } = this;

    return (
      <TextInpMainCont width={this.props.width} height={this.props.height}>
        {this.props.label && (
          <InpLabelCont>
            {this.props.req && <LabelAst>*</LabelAst>}
            <InpLabel>{this.props.label}</InpLabel>
          </InpLabelCont>
        )}
        <TextCont
          disabled={this.props.disabled}
          label={this.props.label}
          defaultValue={this.props.defaultValue}
          type={type}
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
        />
      </TextInpMainCont>
    );
  }
}
