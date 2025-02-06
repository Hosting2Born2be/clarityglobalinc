'use client';

import Image from 'next/image';

import { AnimationsMeta } from '@/widgets/home/types/animations';

import { BurgerMenu } from '@/features/burger-menu';

import { motion } from '@/shared/lib/motion';
import { cn } from '@/shared/lib/styles';
import { FourDots } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import mainSt from '../page.module.css';
import st from './cards-presentation.module.css';

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
      <div className={st.cardsHeader}>
        <Image src="/full-logo.svg" alt="full-logo" width="188" height="36" />
        <span className={st.menu}>
          <BurgerMenu />
        </span>
      </div>
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
        <motion.div className={st.animatedCards}>
          <motion.div
            className={st.smallBlackEllipseLayout}
            style={{
              position: 'absolute',
              x: moveSmallBlackEllipseX,
              y: moveSmallBlackEllipseY,
            }}
          >
            <Image
              className={st.smallBlackEllipse}
              src="/small-black-ellipse.svg"
              alt="small-black-ellipse"
              width={48}
              height={48}
            />
          </motion.div>
          <motion.div
            className={st.bigWhiteEllipseLayout}
            style={{
              position: 'absolute',
              x: moveBigWhiteEllipseX,
              y: moveBigWhiteEllipseY,
            }}
          >
            <Image
              className={st.bigWhiteEllipse}
              src="/big-white-ellipse.svg"
              alt="big-white-ellipse"
              width={68}
              height={68}
            />
          </motion.div>
          <motion.div
            className={st.bigBlackEllipseLayout}
            style={{
              position: 'absolute',
              x: moveBigBlackEllipseX,
              y: moveBigBlackEllipseY,
            }}
          >
            <Image
              className={st.bigBlackEllipse}
              src="/big-black-ellipse.svg"
              alt="big-black-ellipse"
              width={68}
              height={68}
            />
          </motion.div>
          <motion.div
            className={st.smallWhiteEllipseLayout}
            style={{
              position: 'absolute',
              x: moveSmallWhiteEllipseX,
              y: moveSmallWhiteEllipseY,
            }}
          >
            <Image
              className={st.smallWhiteEllipse}
              src="/small-white-ellipse.svg"
              alt="/small-white-ellipse"
              width={48}
              height={48}
            />
          </motion.div>
          <motion.div
            className={st.blackCardLayout}
            style={{
              position: 'absolute',
              x: moveX,
              y: moveY,
            }}
          >
            <Image
              src="/black-card.svg"
              alt="black-card"
              className={st.card}
              width={608}
              height={636}
            />
          </motion.div>
          <motion.div
            className={st.whiteCardLayout}
            style={{
              position: 'absolute',
              x: invertedMoveX,
              y: invertedMoveY,
            }}
          >
            <Image
              src="/white-card.svg"
              alt="white-card"
              className={st.card}
              width={608}
              height={636}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
