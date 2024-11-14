/* eslint-disable jsx-a11y/img-redundant-alt */
import { AnimationText } from "../../animation/AnimationText";

export const Header = () => {
  return (
    <div className="flex sticky top-0 justify-center bg-[#000] z-50">
      <div className="flex w-full max-w-[1200px] justify-between items-center py-3">
        <img
          className="h-[50px]"
          src="./assets/images/logo.png"
          alt="No find the image"
        />
        <div className="flex h-full items-center text-xl gap-5 text-[#fff]">
          <AnimationText
            content={"Business"}
            size={20}
            originalColor={"#fff"}
            animationColor={"#ff5a09"}
          />
          <AnimationText
            content={"Solutions"}
            size={20}
            originalColor={"#fff"}
            animationColor={"#ff5a09"}
          />
          <AnimationText
            content={"Development"}
            size={20}
            originalColor={"#fff"}
            animationColor={"#ff5a09"}
          />
          <AnimationText
            content={"Employment"}
            size={20}
            originalColor={"#fff"}
            animationColor={"#ff5a09"}
          />
          <AnimationText
            content={"About"}
            size={20}
            originalColor={"#fff"}
            animationColor={"#ff5a09"}
          />
        </div>
      </div>
    </div>
  );
};
