import {ButtonHTMLAttributes} from 'react';
import cn from 'classnames';


function Button({className, children, ...restProps}: ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button
      className={cn('button', className)}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
