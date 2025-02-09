'use client';

import Image from 'next/image';

import { useCardsMove } from '@/widgets/home/hooks/use-cards-move';

import { motion } from '@/shared/lib/motion';
import { Title } from '@/shared/ui/kit/title';

import st from './header-with-gadget.module.css';

export function HeaderWithGadget({
  type = 'iphone',
}: {
  type?: 'iphone' | 'ipad';
}) {
  const {
    moveBigWhiteEllipseX,
    moveBigWhiteEllipseY,
    moveBigBlackEllipseX,
    moveBigBlackEllipseY,
    moveSmallWhiteEllipseX,
    moveSmallWhiteEllipseY,
    onMouseMove,
  } = useCardsMove();

  return (
    <header className={st.header} onMouseMove={onMouseMove}>
      <section className={st.info}>
        <Title level={1} weight={600} color="white">
          {type === 'iphone' ? 'Send money online' : 'Receive payments online'}
        </Title>
        <Title level={1} weight={300} color="white">
          {type === 'iphone' ? 'quickly and securely.' : 'from 180 countries.'}
        </Title>
        <Title level={5} weight={400} color="white" className={st.text}>
          {type === 'iphone'
            ? 'Get a better exchange rate and avoid excessive bank fees.'
            : 'Without visiting the bank — quickly and efficiently.'}
        </Title>
      </section>
      <motion.div className={st.iphone}>
        <motion.div
          style={{
            position: 'absolute',
            left: '-120px',
            x: moveBigWhiteEllipseX,
            y: moveBigWhiteEllipseY,
            zIndex: 1,
          }}
        >
          <Image
            className={st.ellipseSm}
            src="/ellipse-sm.svg"
            alt="ellipse-sm"
            width={52}
            height={52}
          />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            right: '-70px',
            top: '200px',
            x: moveBigBlackEllipseX,
            y: moveBigBlackEllipseY,
            zIndex: 1,
          }}
        >
          <Image
            className={st.ellipseMd}
            src="/ellipse-md.svg"
            alt="ellipse-md"
            width={82}
            height={82}
          />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            left: '-120px',
            bottom: '150px',
            x: moveSmallWhiteEllipseX,
            y: moveSmallWhiteEllipseY,
            zIndex: 1,
          }}
        >
          <Image
            className={st.ellipseLg}
            src="/ellipse-lg.svg"
            alt="ellipse-lg"
            width={122}
            height={122}
          />
        </motion.div>
        <div
          style={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          {type === 'iphone' ? (
            <Image
              className={st.iphoneImg}
              src="/clarity-iphone.svg"
              alt="iphone"
              width={315}
              height={635}
            />
          ) : (
            <Image
              className={st.ipadImg}
              src="/clarity-ipad.svg"
              alt="iphone"
              width={518}
              height={658}
            />
          )}
        </div>
      </motion.div>
    </header>
  );
}
