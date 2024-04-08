import './Checkbox.scss'

type CheckProps = {
    title: string;
    big: boolean;    
}

const Checkbox = ({title, big}: CheckProps) => {
  return (
    <>
        <label htmlFor="checkbox" className={big ? "big card Checkbox" : "Checkbox"}>
            <input type="checkbox" name="checkbox"/>
            {title}
        </label>
    </>
  )
}

export default Checkbox;