import React from 'react';

export default function dropIndicatorRender(props: {
  dropPosition: -1 | 0 | 1;
  dropLevelOffset: number;
  indent: number;
  prefixCls: string;
  direction: 'ltr' | 'rtl';
}) {
  const { dropPosition, dropLevelOffset, prefixCls, indent, direction } = props;
  const startPosition = direction === 'ltr' ? 'left' : 'right';
  const endPosition = direction === 'ltr' ? 'right' : 'left';
  const style: React.CSSProperties = {
    [startPosition]: -dropLevelOffset * indent - 10,
    [endPosition]: 0,
  };
  switch (dropPosition) {
    case -1:
      style.top = 0;
      break;
    case 1:
      style.bottom = 0;
      break;
    case 0:
      style.bottom = 0;
      style[startPosition] = indent - 10;
      break;
    default:
      break;
  }
  return <div style={style} className={`${prefixCls}-drop-indicator`} />;
}
