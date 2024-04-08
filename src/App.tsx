import Checkbox from "./Components/Checkbox/Checkbox";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

const App = () => {
  let animals = [
    "dog",
    "cat",
    "elephant",
    "lion",
    "tiger",
    "giraffe",
    "zebra",
    "bear",
    "penguin",
    "dolphin",
  ];

  return (
    <>
      {animals.map((animal, index) => (
        <Checkbox key={index} title={animal} big={true} />
      ))}
      <Header />
      <Form />
    </>
  );
};

export default App;
