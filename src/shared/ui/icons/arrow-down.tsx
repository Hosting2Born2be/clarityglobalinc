'use client';

export function ArrowDown({
  height = '7',
  width = '10',
  color = '#F85C3A',
}: {
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10 7"
      fill="none"
    >
      <path
        d="M1 1.0459L5.04609 5.09199L9.09218 1.0459"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}
