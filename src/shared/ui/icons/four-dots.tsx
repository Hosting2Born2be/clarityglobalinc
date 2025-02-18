'use client';

export function FourDots({ fill = 'white' }: { fill?: 'white' | 'black' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <circle cx="21" cy="4" r="4" fill={fill} />
      <circle cx="21" cy="21" r="4" fill={fill} />
      <circle cx="4" cy="21" r="4" fill={fill} />
      <circle cx="4" cy="4" r="4" fill={fill} />
    </svg>
  );
}
