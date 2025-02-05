'use client';

import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import mainSt from '../page.module.css';
import st from './cards-presentation.module.css';
import { AnimationsMeta } from '@/widgets/home/types/animations';

export function CardsPresentation({
  animationsMeta,
}: {
  animationsMeta: Omit<AnimationsMeta, 'onMouseMove'>;
}) {
  const {
    moveSmallWhiteEllipseX,
    moveSmallWhiteEllipseY,
    moveSmallBlackEllipseY,
    moveBigBlackEllipseX,
    moveBigBlackEllipseY,
    moveBigWhiteEllipseX,
    moveBigWhiteEllipseY,
    moveSmallBlackEllipseX,
    moveX,
    invertedMoveX,
    invertedMoveY,
    moveY,
  } = animationsMeta;

  return (
    <section className={cn(st.presentation, mainSt.headerSection)}>
      <Image src="/full-logo.svg" alt="full-logo" width="188" height="36" />
      <div className={mainSt.contentContainer}>
        <Title weight={600} color="white">
          Smart electronic money
        </Title>
        <Title weight={300} color="white">
          solution in your pocket.
        </Title>
        <div className={mainSt.contentDescription}>
          <Text color="white">Send and receive payments across</Text>
          <Text color="white">Canada and worldwide.</Text>
        </div>
        <motion.div
          style={{
            position: 'relative',
            marginTop: '-60px',
            marginLeft: '-100px',
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '8vh',
              left: '56vh',
              x: moveSmallBlackEllipseX,
              y: moveSmallBlackEllipseY,
            }}
          >
            <Image
              src="/small-black-ellipse.svg"
              alt="small-black-ellipse"
              width={48}
              height={48}
            />
          </motion.div>
          <motion.div
            style={{
              position: 'absolute',
              top: '16vh',
              left: '60vh',
              x: moveBigWhiteEllipseX,
              y: moveBigWhiteEllipseY,
            }}
          >
            <Image
              src="/big-white-ellipse.svg"
              alt="big-white-ellipse"
              width={68}
              height={68}
            />
          </motion.div>
          <motion.div
            style={{
              position: 'absolute',
              top: '36vh',
              left: '8vh',
              x: moveBigBlackEllipseX,
              y: moveBigBlackEllipseY,
            }}
          >
            <Image
              src="/big-black-ellipse.svg"
              alt="big-black-ellipse"
              width={68}
              height={68}
            />
          </motion.div>
          <motion.div
            style={{
              position: 'absolute',
              top: '10vh',
              left: '10vh',
              x: moveSmallWhiteEllipseX,
              y: moveSmallWhiteEllipseY,
            }}
          >
            <Image
              src="/small-white-ellipse.svg"
              alt="/small-white-ellipse"
              width={48}
              height={48}
            />
          </motion.div>
          <motion.div
            style={{
              position: 'absolute',
              marginLeft: '90px',
              marginTop: '-24px',
              x: moveX,
              y: moveY,
            }}
          >
            <Image
              src="/black-card.svg"
              alt="black-card"
              width={608}
              height={636}
            />
          </motion.div>
          <motion.div
            style={{
              position: 'absolute',
              x: invertedMoveX,
              y: invertedMoveY,
            }}
          >
            <Image
              src="/white-card.svg"
              alt="white-card"
              width={608}
              height={636}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
