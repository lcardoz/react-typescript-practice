import styles from './Button.module.css';

interface Props {
  children: string;
  // add ? to indicate this property is optional; 
  // add | (union operator) to add more string literals;
  // we can only set this property to the 3 string literals below:
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button
    // className is array that references 2 objects (btn + specific color) calculate property name dynamically and add color prop after:
      className={[styles.btn, styles['btn-' + color]].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
