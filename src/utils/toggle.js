import {useSelector} from 'react-redux';


export const Toggle = ({id, children}) => {
  const show = useSelector(state => state.toggles[id]);
  return show ? children : null;
};