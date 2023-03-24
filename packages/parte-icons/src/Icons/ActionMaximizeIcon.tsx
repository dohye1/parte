import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.57882 9.40235C6.31529 9.40235 6.08 9.50588 5.91059 9.67529L2.81412 12.7718V11.2753C2.81412 10.7576 2.39059 10.3341 1.87294 10.3341C1.35529 10.3341 0.931763 10.7576 0.931763 11.2753V15.04C0.931763 15.5576 1.35529 15.9812 1.87294 15.9812H5.63765C6.15529 15.9812 6.57882 15.5576 6.57882 15.04C6.57882 14.5224 6.15529 14.0988 5.63765 14.0988H4.15059L7.24706 11.0118C7.41647 10.8424 7.52 10.6071 7.52 10.3435C7.52 9.82588 7.09647 9.40235 6.57882 9.40235ZM15.0494 0.931763H11.2847C10.7671 0.931763 10.3435 1.35529 10.3435 1.87294C10.3435 2.39059 10.7671 2.81412 11.2847 2.81412H12.7812L9.67529 5.92C9.50588 6.08941 9.40235 6.3247 9.40235 6.57882C9.40235 7.09647 9.82588 7.52 10.3435 7.52C10.6071 7.52 10.8424 7.41647 11.0118 7.24706L14.1082 4.15059V5.64706C14.1082 6.1647 14.5318 6.58823 15.0494 6.58823C15.5671 6.58823 15.9906 6.1647 15.9906 5.64706V1.88235C15.9906 1.35529 15.5671 0.931763 15.0494 0.931763Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionMaximizeIcon = convertIcon(Icon, "action-maximize");
export default ActionMaximizeIcon;
