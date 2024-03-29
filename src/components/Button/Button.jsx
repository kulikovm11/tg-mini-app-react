
import './Button.css'
const Button = (props) => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export {Button};
