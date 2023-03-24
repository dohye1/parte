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
        d="M12.16 3.76C12.31 3.65 12.46 3.6 12.63 3.6C12.69 3.6 12.8 3.62 12.97 3.66C13.13 3.7 13.28 3.72 13.4 3.72C13.57 3.72 13.72 3.66 13.83 3.55C13.94 3.44 14 3.3 14 3.12C14 2.93 13.94 2.79 13.83 2.68C13.72 2.57 13.55 2.52 13.34 2.52C13.15 2.52 12.97 2.56 12.8 2.65C12.63 2.74 12.41 2.92 12.15 3.2C11.95 3.41 11.67 3.78 11.28 4.31C11.13 3.66 10.87 3.06 10.5 2.52L8.45 2.84L8.41 3.05C8.56 3.02 8.69 3.01 8.8 3.01C9 3.01 9.17 3.09 9.3 3.26C9.51 3.52 9.8 4.29 10.18 5.59C9.89 5.95 9.69 6.19 9.58 6.3C9.4 6.49 9.25 6.61 9.13 6.66C9.04 6.7 8.94 6.73 8.83 6.73C8.74 6.73 8.6 6.69 8.41 6.6C8.27 6.54 8.16 6.51 8.05 6.51C7.85 6.51 7.69 6.57 7.56 6.69C7.43 6.81 7.37 6.96 7.37 7.15C7.37 7.33 7.43 7.47 7.55 7.58C7.67 7.69 7.83 7.74 8.03 7.74C8.23 7.74 8.41 7.7 8.58 7.62C8.75 7.54 8.97 7.38 9.23 7.13C9.49 6.88 9.85 6.48 10.3 5.94C10.48 6.46 10.63 6.83 10.76 7.07C10.89 7.31 11.04 7.47 11.2 7.58C11.37 7.68 11.57 7.74 11.82 7.74C12.06 7.74 12.31 7.66 12.56 7.49C12.89 7.28 13.22 6.91 13.57 6.4L13.36 6.29C13.13 6.6 12.95 6.79 12.84 6.86C12.77 6.91 12.68 6.93 12.58 6.93C12.46 6.93 12.34 6.86 12.22 6.72C12.02 6.48 11.76 5.81 11.42 4.72C11.71 4.23 11.96 3.91 12.16 3.76ZM6.37 5.83L7.05 3.3H7.88L8.08 2.66H7.24C7.48 1.75 7.8 1.07 8.2 0.65C8.44 0.38 8.68 0.25 8.91 0.25C8.96 0.25 8.99 0.26 9.02 0.29C9.05 0.32 9.06 0.35 9.06 0.39C9.06 0.43 9.03 0.5 8.96 0.6C8.9 0.7 8.86 0.8 8.86 0.89C8.86 1.02 8.91 1.13 9.01 1.22C9.11 1.31 9.24 1.36 9.4 1.36C9.57 1.36 9.71 1.3 9.82 1.19C9.94 1.07 10 0.92 10 0.73C10 0.52 9.92 0.34 9.75 0.21C9.57 0.07 9.3 0 8.93 0C8.34 0 7.81 0.16 7.34 0.48C6.86 0.8 6.41 1.33 5.98 2.07C5.83 2.33 5.69 2.49 5.56 2.56C5.43 2.63 5.21 2.67 4.92 2.66L4.73 3.31H5.54L4.35 7.68C4.15 8.4 4.02 8.84 3.95 9.01C3.85 9.25 3.69 9.46 3.49 9.63C3.4 9.7 3.3 9.73 3.18 9.73C3.15 9.73 3.12 9.72 3.1 9.7L3.07 9.67C3.07 9.65 3.1 9.61 3.16 9.56C3.22 9.5 3.25 9.41 3.25 9.3C3.25 9.17 3.2 9.07 3.11 8.98C3.01 8.89 2.88 8.85 2.7 8.85C2.49 8.85 2.32 8.9 2.19 9.01C2.06 9.13 2 9.26 2 9.4C2 9.56 2.08 9.7 2.23 9.82C2.39 9.94 2.63 10 2.97 10C3.5 10 3.96 9.87 4.37 9.61C4.78 9.35 5.13 8.96 5.44 8.42C5.74 7.89 6.05 7.03 6.37 5.83ZM8.71 9.29C8.53 9.11 8.28 9 8 9C7.72 9 7.47 9.11 7.29 9.29L5.29 11.29C5.11 11.47 5 11.72 5 12C5 12.55 5.45 13 6 13C6.28 13 6.53 12.89 6.71 12.71L7 12.41V15C7 15.55 7.45 16 8 16C8.55 16 9 15.55 9 15V12.41L9.29 12.7C9.47 12.89 9.72 13 10 13C10.55 13 11 12.55 11 12C11 11.72 10.89 11.47 10.71 11.29L8.71 9.29Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TablePublishFunctionIcon = convertIcon(Icon, "table-publish-function");
export default TablePublishFunctionIcon;
