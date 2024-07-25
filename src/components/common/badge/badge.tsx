import {PropsWithChildren} from 'react';


type BadgeProps = {
  className: string;
}

function Badge({className, children}: PropsWithChildren<BadgeProps>) {

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Badge;
