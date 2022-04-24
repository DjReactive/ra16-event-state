import { portfolioImages, portfolioCategories } from './defines';

export function ImagesList(props) {
  const defaultState = 'All';
  const state = props.state;
  const images = (state !== defaultState) ?
    portfolioImages.filter(obj => obj.category === props.state) :
    portfolioImages;

  return (
    <div className="imagelist">
    {
      images.map(o => <img src={o.img} key={o} className="image" />)
    }
    </div>
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

export function ToolTip(props) {
  const items = portfolioCategories;

  return (
    <ul className="tooltip">
    {items.map(o => <ToolCategory key={o} category={o} state={props.state} setState={props.setState} />)}
    </ul>
  );
}
