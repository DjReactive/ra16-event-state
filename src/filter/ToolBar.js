class Portfolio {
  constructor(filtres, selected, projectList) {
    this.filtres = filtres;
    this.selected = selected;
    this.projectList = projectList;
  }
}

export function ToolBar(props) {
  const items = portfolioCategories;

  return (
    <ul className="tooltip">
    {items.map(o => <ToolCategory key={o} category={o} state={props.state} setState={props.setState} />)}
    </ul>
  );
}

function ToolCategory(props) {
  const {category, state, setState} = props;

  const handleClick = evt => {
    setState(evt.target.textContent);
  };
  let catClass = (state === category) ? 'active' : '';
  return (
    <li onClick={handleClick} className={catClass}>{category}</li>
  );
}
