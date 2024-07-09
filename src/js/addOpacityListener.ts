export function addOpacityListeners(
    projectDesc: HTMLElement, 
    projectDetail: HTMLElement, 
    projectLink: HTMLElement
  ): void {
    projectDesc.addEventListener('mouseenter', () => {
      projectDesc.style.opacity = '0';
      projectDetail.style.opacity = '1';
    });
  
    projectDesc.addEventListener('mouseleave', () => {
      projectDesc.style.opacity = '1';
      projectDetail.style.opacity = '0';
    });
  
    projectLink.addEventListener('mouseenter', () => {
      projectDesc.style.opacity = '0';
      projectDetail.style.opacity = '1';
    });
  
    projectLink.addEventListener('mouseleave', () => {
      projectDesc.style.opacity = '1';
      projectDetail.style.opacity = '0';
    });
  }
  