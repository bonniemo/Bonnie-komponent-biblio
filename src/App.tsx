import Carousel from "./Components/Carousel/Carousel";
import { myObj } from "./Components/Carousel/carouselTypes";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Todo from "./Components/Todo/Todo";

const App = () => {
  return (
    <>
      <Todo />
      <Header />
      <Form />
      <Carousel obj={myObj} />
    </>
  );
};

export default App;
