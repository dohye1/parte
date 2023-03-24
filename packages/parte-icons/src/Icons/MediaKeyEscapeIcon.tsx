import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M2 7c.55 0 1-.45 1-1V4.41L7.29 8.7c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L4.41 3H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1Zm7-5.9v2A5 5 0 1 1 3.1 9h-2c.49 3.39 3.38 6 6.9 6 3.87 0 7-3.13 7-7 0-3.52-2.61-6.41-6-6.9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaKeyEscapeIcon = convertIcon(Icon, "media-key-escape");
export default MediaKeyEscapeIcon;
