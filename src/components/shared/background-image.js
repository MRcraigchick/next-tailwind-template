import Image from "next/image";

export default function BackgroundImage({
  src = "",
  alt = "background image",
  containerClass = "",
  imageClass = "",
  childrenContainerClass = "",
  withLayer = true,
  layerOpacity = 0.3,
  children,
}) {
  return (
    <div className={`relative w-full overflow-hidden ${containerClass}`}>
      <Image
        src={src}
        alt={alt}
        width="2000"
        height="2000"
        className={`absolute z-[0] w-full h-auto ${imageClass}`}
        priority
      />
      {withLayer && (
        <div
          style={{ opacity: layerOpacity }}
          className="absolute left-0 top-0 z-[1] w-full h-full bg-[black]"
        ></div>
      )}
      <div className={`absolute w-full h-full z-[2] ${childrenContainerClass}`}>
        {children}
      </div>
    </div>
  );
}
