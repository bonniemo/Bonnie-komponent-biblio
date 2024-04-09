import Carousel from "./Components/Carousel/Carousel";
import { myObj } from "./Components/Carousel/carouselTypes";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Todo from "./Components/Todo/Todo";

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Todo />
      <Carousel obj={myObj} />
    </>
  );
};

export default App;
