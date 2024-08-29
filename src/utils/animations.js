import gsap from "gsap";

export const animateWithGsap = (target, animationProps, scrollPropos) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollPropos
    },
  });
}


export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
  timeline
    .to(rotationRef, {
      rotation: rotationState,
      duration: 1,
      ease: 'power2.inOut',
    })
    .to(firstTarget, {
      ...animationProps,
      ease: 'power2.inOut',
    }, '<')
    .to(secondTarget, {
      transform: 'translateX(0%)',  // Make sure the large model comes into view
      opacity: 1,  // Ensure visibility
      duration: 1.5,
      ease: 'power2.inOut',
    }, '<');  // Synchronize with the previous animation
};
