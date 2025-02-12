import { useMotionValue, useTransform } from '@/shared/lib/motion';

export const useEllipseMove = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-100, 100], [-20, 20]);
  const moveY = useTransform(y, [-100, 100], [-20, 20]);
  const firstGroupX = useTransform(x, [-100, 150], [-20, 80]);
  const firstGroupY = useTransform(y, [-100, 150], [-20, 80]);
  const secondGroupX = useTransform(x, [100, -100], [-20, 80]);
  const secondGroupY = useTransform(y, [100, -100], [-20, 80]);

  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    x.set((clientX - centerX) / 10);
    y.set((clientY - centerY) / 10);
  };

  return {
    moveX,
    moveY,
    firstGroupX,
    firstGroupY,
    secondGroupX,
    secondGroupY,
    onMouseMove,
  };
};
