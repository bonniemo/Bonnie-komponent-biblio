import Checkbox from "./Components/Checkbox/Checkbox";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

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
      <ProgressBar title="Progress" percentage={75} color={"green"} />
    </>
  );
};

export default App;
