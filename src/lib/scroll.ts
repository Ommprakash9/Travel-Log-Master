export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed header
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

export const handleNavClick = (href: string) => {
  if (href.startsWith('#')) {
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
  }
};