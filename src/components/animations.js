export const animateWithGsapTimeLine = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
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
