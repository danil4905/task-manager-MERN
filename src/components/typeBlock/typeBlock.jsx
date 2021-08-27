import classes from './typeBlock.module.scss';
import { chooseFormat } from '../../utils/chooseType';

const TypeBlock = (props) => {
    const format = chooseFormat(props.type);
    return (
        <div className={classes.wrapper}>
            {format.map((el,i) => <div className={classes.format} key={i}>
                {el}
            </div>)}
        </div>
    )
}
export default TypeBlock;