import { useEffect } from 'react';

/**
 * Hook para navegación con flechas en menús
 * @param {React.RefObject} containerRef - Referencia al contenedor del menú
 * @param {boolean} isActive - Si la navegación está activa
 */
export const useArrowNavigation = (containerRef, isActive) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;

    const handleKeyDown = (e) => {
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;

      const menuItems = Array.from(
        container.querySelectorAll('[role="menuitem"]')
      );

      if (menuItems.length === 0) return;

      const currentIndex = menuItems.findIndex(
        (item) => item === document.activeElement
      );

      let nextIndex;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          nextIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
          break;
        case 'ArrowUp':
          e.preventDefault();
          nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
          break;
        case 'Home':
          e.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          nextIndex = menuItems.length - 1;
          break;
        default:
          return;
      }

      menuItems[nextIndex]?.focus();
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [containerRef, isActive]);
};
