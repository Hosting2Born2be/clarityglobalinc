import { useMotionValue, useTransform } from 'framer-motion';

export const useCardsMove = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-100, 100], [-20, 20]);
  const moveY = useTransform(y, [-100, 100], [-20, 20]);
  const moveSmallBlackEllipseX = useTransform(x, [-100, 150], [-20, 80]);
  const moveSmallBlackEllipseY = useTransform(y, [-100, 150], [-20, 80]);
  const moveBigWhiteEllipseX = useTransform(x, [100, -100], [20, 60]);
  const moveBigWhiteEllipseY = useTransform(y, [100, -100], [20, 60]);
  const moveBigBlackEllipseX = useTransform(x, [100, -100], [-20, 80]);
  const moveBigBlackEllipseY = useTransform(y, [100, -100], [-20, 80]);
  const moveSmallWhiteEllipseX = useTransform(x, [-100, 100], [-20, 40]);
  const moveSmallWhiteEllipseY = useTransform(y, [-100, 100], [-20, 40]);

  const invertedMoveX = useTransform(x, [-100, 100], [20, -20]);
  const invertedMoveY = useTransform(y, [-100, 100], [20, -20]);

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
    moveSmallBlackEllipseX,
    moveSmallBlackEllipseY,
    moveBigWhiteEllipseX,
    moveBigWhiteEllipseY,
    moveBigBlackEllipseX,
    moveBigBlackEllipseY,
    moveSmallWhiteEllipseX,
    moveSmallWhiteEllipseY,
    invertedMoveX,
    invertedMoveY,
    onMouseMove,
  };
};
