import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { Close as CloseIcon } from '@/shared/ui/icons/close';

import st from './dialog.module.css';

export function Dialog({
  trigger,
  children,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
}) {
  return (
    <Root>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Overlay className={st.overlay} />
        <Content className={st.content}>
          <section className={st.contentLayout}>
            <Close className={st.close}>
              <CloseIcon />
            </Close>
            <Title />
            <Description asChild>{children}</Description>
          </section>
        </Content>
      </Portal>
    </Root>
  );
}
