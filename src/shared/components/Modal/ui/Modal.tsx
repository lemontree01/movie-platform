import { useCallback, useEffect, useState, useRef } from 'react';
import styles from './Modal.module.scss';
import { Portal } from 'shared/components/Portal/Portal';

export const Modal: React.FC<{
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}> = ({ children, isOpen, onClose }) => {
  const CLOSING_DELAY = 300;
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, CLOSING_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      removeEventListener('keydown', onKeyDown);
      clearTimeout(timeRef.current);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={`${styles.modal} ${isOpen && styles.opened} ${isClosing && styles.closing}`}>
      <div className={styles.overlay} onClick={closeHandler}>
        <div className={styles.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
    </Portal>
  );
};
