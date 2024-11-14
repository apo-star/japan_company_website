import { gsap } from "gsap";

interface IAnimationText {
  content: string;
  size: number;
  originalColor: string;
  animationColor?: string;
}

export const AnimationText = ({
  content,
  size,
  originalColor,
  animationColor,
}: IAnimationText) => {
  const handleMouseEnter = (e: any) => {
    gsap.to(e.target, { color: animationColor, duration: 0.3 });
  };

  const handleMouseLeave = (e: any) => {
    gsap.to(e.target, { color: originalColor, duration: 0.3 });
  };

  return (
    <p
      className={`cursor-pointer text-[${size + "px"}]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </p>
  );
};
