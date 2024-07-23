import useMediaQuery from './useMediaQuery';

function useResponsive() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(max-width: 1199px)');

  if (isMobile) return 'mobile';
  if (isTablet) return 'tablet';
  return 'pc';
}
export default useResponsive;
