import {ButtonHTMLAttributes} from 'react';


function Button({className, children, ...restProps}: ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button
      className={`button ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
