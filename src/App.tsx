import Checkbox from "./Components/Checkbox/Checkbox"


const App = () => {
  let animals = ["dog", "cat", "elephant", "lion", "tiger", "giraffe", "zebra", "bear", "penguin", "dolphin"]

  return (
    <>
    {
      animals.map((animal, index) => (
        <Checkbox key={index} title={animal} big={true}/>
      ))
    }
    </>
  )
}

export default App