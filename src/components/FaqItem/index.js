import { Component } from "react";
import "./index.css";

class FaqItem extends Component {
  state = { isActive: false };

  onToggleIsActive = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { isActive } = this.state;
    const { eachItem } = this.props;
    const { questionText, answerText } = eachItem;

    const imageUrl = isActive
      ? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
      : "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png";

    const imageAlt = isActive ? "minus" : "plus";

    return (
      <li className="list-cont">
        <div className="q-cont">
          <h1 className="q-head">{questionText}</h1>
          <button
            className="button"
            type="button"
            onClick={this.onToggleIsActive}
            aria-label={isActive ? "Collapse" : "Expand"}
          >
            <img src={imageUrl} alt={imageAlt} className="img" />
          </button>
        </div>
        <div className={`answer-container ${isActive ? "open" : ""}`}>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      </li>
    );
  }
}

export default FaqItem;
