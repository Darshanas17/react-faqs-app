import { Component } from "react";
import FaqItem from "../FaqItem";
import "./index.css";

class Faqs extends Component {
  render() {
    const { faqsList } = this.props;
    return (
      <div className="bg-cont">
        <div className="cont">
          <h1 className="head">FAQs</h1>
          <ul className="faqs-cont">
            {faqsList.map((eachItem) => (
              <FaqItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Faqs;
