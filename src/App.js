import Faqs from "./components/Faqs";

import "./App.css";
const faqsList = [
  {
    id: 0,
    questionText: "What exactly is the stock market, and how does it work?",
    answerText:
      "The stock market is a platform where investors buy and sell shares of publicly traded companies. It includes major exchanges like the NSE and BSE in India or the NYSE and NASDAQ globally.",
  },
  {
    id: 1,
    questionText: "How can I start investing in stocks as a beginner?",
    answerText:
      "To start investing, open a Demat and trading account with a registered broker, complete KYC verification, fund your account, and start buying shares.",
  },
  {
    id: 2,
    questionText: "What are the different types of stocks I can invest in?",
    answerText:
      "Stocks can be categorized into common and preferred stocks. Other classifications include blue-chip, mid-cap, small-cap, growth, and dividend stocks.",
  },
  {
    id: 3,
    questionText: "What does IPO mean, and should I invest in it?",
    answerText:
      "An IPO (Initial Public Offering) is when a private company offers its shares to the public for the first time to raise capital and get listed on a stock exchange.",
  },
  {
    id: 4,
    questionText: "What does SEBI do, and why is it important?",
    answerText:
      "SEBI (Securities and Exchange Board of India) regulates the stock market to protect investors, ensure transparency, and maintain fair trading practices.",
  },
  {
    id: 5,
    questionText: "What are stock indices like NIFTY and SENSEX?",
    answerText:
      "Stock indices represent the performance of a group of stocks. Examples include NIFTY 50 and SENSEX in India, or the S&P 500 and Dow Jones globally.",
  },
  {
    id: 6,
    questionText:
      "What’s the difference between intraday trading and delivery trading?",
    answerText:
      "Intraday trading involves buying and selling stocks within the same day, while delivery trading involves holding stocks for a longer period.",
  },
  {
    id: 7,
    questionText: "Why do I need a stockbroker to buy stocks?",
    answerText:
      "A stockbroker is a licensed entity that facilitates buying and selling of stocks on behalf of investors in exchange for brokerage fees.",
  },
  {
    id: 8,
    questionText: "What are dividends, and how do I get them?",
    answerText:
      "Dividends are payments made by companies to shareholders from their profits. They can be issued as cash or additional shares.",
  },
  {
    id: 9,
    questionText: "What time does the stock market open and close in India?",
    answerText:
      "In India, the stock market operates from 9:15 AM to 3:30 PM IST on weekdays. Pre-market sessions start at 9:00 AM.",
  },
];

const App = () => <Faqs faqsList={faqsList} />;

export default App;
