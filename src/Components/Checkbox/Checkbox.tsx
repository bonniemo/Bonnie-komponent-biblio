import './Checkbox.scss'

type CheckProps = {
    title: string;
    big: boolean;    
}

const Checkbox = ({title, big}: CheckProps) => {
  return (
    <>
        <label htmlFor="check" className={big ? "big card checkbox__label" : "checkbox__label"}>
            <input type="checkbox" name="checkbox"/>
            {title}
        </label>
    </>
  )
}

export default Checkbox;