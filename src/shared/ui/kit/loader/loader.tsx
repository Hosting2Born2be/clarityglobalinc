'use client';

import { Oval } from 'react-loader-spinner';

export function Loader({
  height = '24',
  width = '24',
}: {
  height?: string;
  width?: string;
}) {
  return (
    <Oval
      visible={true}
      height={height}
      width={width}
      color="#F85C3A"
      secondaryColor="#DCDCDC"
      ariaLabel="oval-loading"
    />
  );
}
