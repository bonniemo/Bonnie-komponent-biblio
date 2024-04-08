import { ReactNode } from "react";
import "./CheckboxCards.scss";

type CheckProps = {
  title: string;
  svg: ReactNode;
};

const CheckboxCards = ({ title, svg }: CheckProps) => {
  return (
    <>
      <label htmlFor="checkbox" className="CheckboxCards">
          <input type="checkbox" name="checkbox" />        
          <section className="card-content">
            {svg}
            <p>{title}</p>
          </section>
        
      </label>
    </>
  );
};

export default CheckboxCards;
