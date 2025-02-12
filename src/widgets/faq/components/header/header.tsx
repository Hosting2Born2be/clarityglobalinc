'use client';

import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { useEllipseMove } from '../../hooks/use-ellipse-move';
import st from './header.module.css';

export function Header() {
  const { firstGroupY, firstGroupX, secondGroupY, secondGroupX, onMouseMove } =
    useEllipseMove();

  return (
    <header className={st.layout} onMouseMove={onMouseMove}>
      <Title level={1} weight={700} color="white">
        FAQ
      </Title>
      <Text size="lg" weight={500} color="white" className={st.text}>
        Clarity Global is an online payment service. We transfer money to 180
        countries globally within seconds. There is a list of frequently asked
        questions to help you use the service faster and simpler. Please contact
        the customer support team if you can not find an answer.
      </Text>
      <motion.div className={st.ellipseSection}>
        <motion.div
          className={st.ellipseXs}
          style={{
            x: firstGroupX,
            y: firstGroupY,
          }}
        >
          <Image
            src="/ellipse-sm.svg"
            alt="ellipse-sm"
            width={34}
            height={34}
          />
        </motion.div>
        <motion.div
          className={st.ellipseSm}
          style={{
            x: firstGroupX,
            y: firstGroupY,
          }}
        >
          <Image
            src="/ellipse-md.svg"
            alt="ellipse-md"
            width={64}
            height={64}
          />
        </motion.div>
        <motion.div
          className={st.ellipseMd}
          style={{
            x: firstGroupX,
            y: firstGroupY,
          }}
        >
          <Image
            src="/ellipse-lg.svg"
            alt="ellipse-lg"
            width={68}
            height={68}
          />
        </motion.div>
        <motion.div
          className={st.ellipseLg}
          style={{
            x: secondGroupX,
            y: secondGroupY,
          }}
        >
          <Image
            src="/ellipse-lg.svg"
            alt="ellipse-lg"
            width={107}
            height={107}
          />
        </motion.div>
        <motion.div
          className={st.ellipseXl}
          style={{
            x: secondGroupX,
            y: secondGroupY,
          }}
        >
          <Image
            className={st.ellipseXlImg}
            src="/ellipse-lg.svg"
            alt="ellipse-lg"
            width={126}
            height={126}
          />
        </motion.div>
      </motion.div>
    </header>
  );
}
