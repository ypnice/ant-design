import React from 'react';

export default function dropIndicatorRender(props: {
  dropPosition: -1 | 0 | 1;
  dropLevelOffset: number;
  indent: number;
  prefixCls: string;
}) {
  const { dropPosition, dropLevelOffset, prefixCls, indent } = props;
  const style: React.CSSProperties = {
    left: -dropLevelOffset * indent - 10,
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
      style.left = indent - 10;
      break;
    default:
      break;
  }
  return <div style={style} className={`${prefixCls}-drop-indicator`} />;
}
