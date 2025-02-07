'use client';

import Image from 'next/image';

import { motion, useMotionValue, useTransform } from '@/shared/lib/motion';
import { Title } from '@/shared/ui/kit/title';

import st from './header.module.css';

export function Header() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveSmEllipseX = useTransform(x, [100, -100], [20, 60]);
  const moveSmEllipseY = useTransform(y, [100, -100], [20, 60]);
  const moveBigBlackEllipseX = useTransform(x, [100, -100], [-20, 80]);
  const moveBigBlackEllipseY = useTransform(y, [100, -100], [-20, 80]);
  const moveSmallWhiteEllipseX = useTransform(x, [-100, 100], [-20, 40]);
  const moveSmallWhiteEllipseY = useTransform(y, [-100, 100], [-20, 40]);

  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    x.set((clientX - centerX) / 10);
    y.set((clientY - centerY) / 10);
  };

  return (
    <header className={st.header} onMouseMove={onMouseMove}>
      <section className={st.info}>
        <Title level={1} weight={600} color="white">
          Send your payments
        </Title>
        <Title level={1} weight={300} color="white">
          quickly and securely.
        </Title>
        <Title level={5} weight={400} color="white" className={st.text}>
          Get a better exchange rate and avoid excessive bank fees.
        </Title>
      </section>
      <motion.div className={st.iphone}>
        <motion.div
          style={{
            position: 'absolute',
            left: '-120px',
            x: moveSmEllipseX,
            y: moveSmEllipseY,
            zIndex: 1, // ниже iPhone
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
          className={st.bigBlackEllipseLayout}
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
            className={st.smallWhiteEllipse}
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
          <Image
            src="/clarity-iphone.svg"
            alt="iphone"
            width={315}
            height={635}
          />
        </div>
      </motion.div>
    </header>
  );
}
