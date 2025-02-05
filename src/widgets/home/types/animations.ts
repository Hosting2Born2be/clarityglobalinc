import { MotionValue } from 'framer-motion';

export type AnimationsMeta = {
  moveX: MotionValue<number>;
  moveY: MotionValue<number>;
  moveSmallBlackEllipseX: MotionValue<number>;
  moveBigWhiteEllipseY: MotionValue<number>;
  moveBigWhiteEllipseX: MotionValue<number>;
  moveBigBlackEllipseY: MotionValue<number>;
  moveBigBlackEllipseX: MotionValue<number>;
  moveSmallBlackEllipseY: MotionValue<number>;
  moveSmallWhiteEllipseX: MotionValue<number>;
  moveSmallWhiteEllipseY: MotionValue<number>;
  invertedMoveX: MotionValue<number>;
  invertedMoveY: MotionValue<number>;
};
