import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import Layout from "./Components/Layout/Layout";

const cardNum = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q"];
const suites = ["H", "C", "D", "S"];
let allCards = cardNum.map((el, index, arr) => {
  let card = "";
  suites.forEach((val) => {
    card += `${el}${val}${val === "S" && index === 12 ? "" : " "}`;
  });
  return card;
});
allCards = allCards.join("").split(" ");

function App() {
  const value = "10C";
  const [finalCards, setFinalCards] = useState([]);
  const [randomCards, setRandomCards] = useState([]);
  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();
  const [card3, setCard3] = useState();
  const [card4, setCard4] = useState();
  const [card5, setCard5] = useState();
  const [card6, setCard6] = useState();
  //get three random numbers from all cards
  const randomeNumber = () => {
    return Math.floor(Math.random() * 52);
  };

  const shuffle = (arr)=>{
    arr.sort(()=>Math.random()-0.5);
    setFinalCards(arr);
    return arr;
  }

  useEffect(() => {
    let num = [];
    for (let x = 0; x < 3; x++) {
      num.push(randomeNumber());
    }

    let values = [];
    let completed = false;
    let val = "";

    while (completed === false) {
      val = num[Math.floor(Math.random() * 3)];
      if (!values.includes(val) && values.length < 3) {
        values.push(val);
      }
      if (values.length >= 3) {
        completed = true;
      }
    }
    setCard1(allCards[values[0]]);
    setCard2(allCards[values[1]]);
    setCard3(allCards[values[2]]);

    let cards = [<Card key={0}value={card1} />,<Card key={1}value={card2} />,<Card key={2}value={card3} />];
    shuffle(cards);
    
  }, []);
  return (
    <div className="App">
      <Layout>
        <section className="row">
          <Card value={card1} />
          <Card value={card2} />
          <Card value={card3} />
        </section>
        <section className="row">
          <Card value={card1} />
          <Card value={card2} />
          <Card value={card3} />
        </section>
      </Layout>
    </div>
  );
}

export default App;
