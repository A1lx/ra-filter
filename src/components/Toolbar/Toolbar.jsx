export const Toolbar = ({filters, selected, onSelectFilter}) => {

  let filterBtns = filters.map(elem => {
    if (elem === selected) {
      return <button onClick={() => onSelectFilter(elem)} key={elem} className="btn active">{elem}</button>
    }
    return <button onClick={() => onSelectFilter(elem)} key={elem} className="btn">{elem}</button>
  });

  return (
    <div className="buttons">
      {filterBtns}
    </div>
  )
}