import './Checkbox.scss'

type CheckTitle = {
    title: string;
}

const Checkbox = ({title}: CheckTitle) => {
  return (
    <section className="checkbox">
        <label htmlFor="check" className="checkbox__label">
            <input type="checkbox" name="checkbox" />
            {title}
        </label>
    </section>
  )
}

export default Checkbox