import React from 'react';
import glamorous from 'glamorous';
import GoPlus from 'react-icons/lib/go/plus';

import { hexOrColor } from '../../utils/color';

const PlusChip = ({
  className,
  size = 16,
  children,
  onClick,
}: {
  className?: string,
  size: number,
  children?: string,
  onClick?: any,
}) =>
  (<div className={`${className} plus-chip`} onClick={onClick}>
    {children || <GoPlus />}
  </div>);

const style = ({ theme, color, size }: { theme: THEME, color: string, size?: number }) => {
  const borderColor = color
    ? hexOrColor(color)((theme.colors && theme.colors[color]) || 'white')
    : 'black';

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size || 15,
    height: size || 15,
    border: '1px solid',
    cursor: 'pointer',
    color: borderColor,

    '&.plus-chip + .plus-chip': {
      marginLeft: theme.spacing >= 0 ? theme.spacing && theme.spacing / 2 : 4,
    },
  };
};

export default glamorous(PlusChip)(style);
export { PlusChip };
