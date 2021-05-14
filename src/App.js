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
  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();
  const [card3, setCard3] = useState();
  //get three random numbers from all cards
  const randomeNumber = () => {
    return Math.floor(Math.random() * 52);
  };

  const shuffle = (arr)=>{
    console.log(arr)
    const copyArr = [...arr]
    copyArr.sort(()=>Math.random()-0.5);
    return copyArr;

  }

  function getCards(one,two,three){
    return [<Card key={0}>{one}</Card>,<Card key={1}>{two}</Card>,<Card key={2}>{three}</Card>]
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
    setFinalCards([<Card key={0}>{allCards[values[0]]}</Card>,<Card key={1}>{allCards[values[1]]}</Card>,<Card key={2}>{allCards[values[2]]}</Card>]);

  }, []);
  return (
    <div className="App">
      <Layout>
        <section className="row">
          {getCards(card1,card2,card3)}
        </section>
        <section className="row">
          {shuffle(finalCards)}
        </section>
      </Layout>
    </div>
  );
}

export default App;
