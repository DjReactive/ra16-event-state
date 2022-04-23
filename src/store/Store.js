import React, { useState } from 'react';
import { products } from './defines';
import { ListView, CardsView } from './View';

export default function Store() {
  const [state, setState] = useState('view_list');

  const onSwitch = state => {
    setState(state);
  }
  return (
    <div>
      <IconSwitch icon={state} onSwitch={onSwitch}/>
      <ViewTemplate state={state} />
    </div>
  );
}

function IconSwitch(props) {
  const {icon, onSwitch} = props;

  const handleClick = () => {
    const newState = (icon === 'view_list') ? 'view_module' : 'view_list';
    onSwitch(newState);
  }
  return <button icon={icon} onClick={handleClick} className="switcher">{icon}</button>
}

function ViewTemplate({state}) {
  if (state === 'view_list') return <ListView items={products} />
  return <CardsView items={products} />
}
