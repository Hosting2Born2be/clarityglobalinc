'use client';

import Image from 'next/image';

import { useCardsMove } from '@/widgets/home/hooks/use-cards-move';

import { motion } from '@/shared/lib/motion';
import { Title } from '@/shared/ui/kit/title';

import st from './header.module.css';

export function Header() {
  const {
    moveSmallWhiteEllipseX,
    moveSmallWhiteEllipseY,
    moveBigWhiteEllipseX,
    moveBigWhiteEllipseY,
    moveBigBlackEllipseX,
    moveBigBlackEllipseY,
    onMouseMove,
  } = useCardsMove();

  return (
    <header className={st.layout} onMouseMove={onMouseMove}>
      <div className={st.title}>
        <Title level={1} weight={600} color="white">
          Elevate your earnings:
        </Title>
        <Title level={1} weight={300} color="white">
          join the Clarity Global partners’ network today!
        </Title>
      </div>
      <motion.div style={{ position: 'relative' }}>
        <motion.div
          className={st.ellipseSm}
          style={{
            x: moveBigWhiteEllipseX,
            y: moveBigWhiteEllipseY,
            zIndex: 1,
          }}
        >
          <Image
            src="/ellipse-sm.svg"
            alt="ellipse-sm"
            width={68}
            height={68}
          />
        </motion.div>
        <motion.div
          className={st.ellipseMd}
          style={{
            x: moveBigBlackEllipseX,
            y: moveBigBlackEllipseY,
            zIndex: 1,
          }}
        >
          <Image
            src="/ellipse-md.svg"
            alt="ellipse-md"
            width={107}
            height={107}
          />
        </motion.div>
        <motion.div
          className={st.ellipseLg}
          style={{
            x: moveSmallWhiteEllipseX,
            y: moveSmallWhiteEllipseY,
            zIndex: 1,
          }}
        >
          <Image
            src="/ellipse-lg.svg"
            alt="ellipse-lg"
            width={160}
            height={160}
          />
        </motion.div>
      </motion.div>
    </header>
  );
}
