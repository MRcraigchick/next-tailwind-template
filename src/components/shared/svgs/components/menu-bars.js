export default function MenuBarsSvg({
  width = "",
  height = "",
  barHeight = "",
  svgClass = "",
  barOneClass = "",
  barTwoClass = "",
  barThreeClass = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="22"
      viewBox="0 0 30 22"
      className={svgClass}
    >
      <rect
        className={barOneClass}
        transform="rotate(-45, 0, 5)
                  translate(-9.5, 0)"
        y="20.7059"
        width="30"
        height="1.29412"
      />
      <rect
        fill="transparent"
        className={barTwoClass}
        y="10.3529"
        width="30"
        height="1.29412"
      />
      <rect
        transform="rotate(45, 0, 5)"
        className={barThreeClass}
        width="30"
        height="1.29412"
      />
    </svg>
  );
}
