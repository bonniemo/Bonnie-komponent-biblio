import Checkbox from "./Components/Checkbox/Checkbox";

const App = () => {
  let animals = ["dog", "cat", "elephant"];

  return (
    <>
      {animals.map((animal, index) => (
        <Checkbox key={index} title={animal} big={true} />
      ))}      
    </>
  );
};

export default App;
