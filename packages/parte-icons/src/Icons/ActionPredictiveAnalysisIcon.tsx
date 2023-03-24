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
        d="M16 6.41C16 5.4 15.51 4.47 14.71 3.92C14.28 2 12.64 0.64 10.71 0.64C10.25 0.64 9.79 0.72 9.36 0.88C8.83 0.31 8.11 0 7.34 0C6.44 0 5.6 0.44 5.06 1.16C4.94 1.15 4.82 1.14 4.7 1.14C3.39 1.14 2.28 2.03 1.93 3.31C0.78 3.72 0 4.84 0 6.13C0 6.51 0.07 6.89 0.21 7.25C0.07 7.6 0 7.98 0 8.36C0 9.47 0.58 10.47 1.51 10.99C2.05 11.55 2.78 11.86 3.54 11.86C4.03 11.86 4.49 11.74 4.91 11.5C5.45 12.15 6.25 12.54 7.09 12.54C7.61 12.54 8.12 12.4 8.56 12.12C9.05 12.51 9.63 12.77 10.25 12.85C11.29 14 12.09 15.48 12.09 15.49C12.09 15.49 12.37 15.98 12.35 15.98C13.12 15.98 13.76 15.82 13.67 14.94C13.67 14.96 12.94 12.63 12.94 12.63C13.35 12.42 13.69 12.08 13.91 11.65C14.81 11.13 15.38 10.12 15.38 9.04C15.38 8.8 15.35 8.56 15.3 8.33C15.75 7.81 16 7.12 16 6.41ZM14.77 7.43L14.62 7.27V7.27L14.01 6.6C13.74 6.31 13.47 5.66 13.43 5.21C13.43 5.21 13.33 4.21 13.33 4.2C13.28 3.61 12.39 3.62 12.42 4.31C12.42 4.33 12.52 5.32 12.52 5.32C12.55 5.61 12.64 5.94 12.76 6.25C12.7 6.24 12.64 6.23 12.58 6.23C12.58 6.23 10.52 6.13 10.53 6.12C9.95 6.1 9.82 7.09 10.49 7.12C10.48 7.12 12.54 7.23 12.54 7.23C12.96 7.25 13.58 7.53 13.83 7.81L14.32 8.35L14.34 8.4C14.42 8.61 14.46 8.84 14.46 9.06C14.46 9.8 14.05 10.47 13.39 10.81L13.23 10.89L13.16 11.07C13.01 11.45 12.68 11.73 12.28 11.81L11.74 11.92L12.44 14.12C12.06 13.51 11.49 12.69 10.82 11.98L10.7 11.85L10.53 11.84C10.12 11.81 9.73 11.67 9.39 11.46L10.75 10.28C11.1 9.97 11.58 9.84 11.74 9.89C11.74 9.89 12.37 10.06 12.36 10.07C12.99 10.23 13.19 9.33 12.59 9.1L11.97 8.92C11.42 8.76 10.64 9.1 10.18 9.5L8.65 10.83V10.83L8.34 11.09C7.99 11.38 7.59 11.53 7.14 11.53C6.5 11.53 5.91 11.2 5.56 10.67V9.15C5.56 8.75 5.73 8.36 5.83 8.3C5.83 8.3 6.35 7.96 6.34 7.95C7.05 7.42 6.52 6.72 5.85 7.06C5.85 7.05 5.33 7.41 5.33 7.41C5.07 7.56 4.88 7.85 4.75 8.18C4.64 8.07 4.53 7.98 4.41 7.9C4.41 7.9 2.88 6.89 2.88 6.88C2.23 6.43 1.68 7.39 2.39 7.77C2.39 7.76 3.9 8.79 3.9 8.79C4.27 9.03 4.52 9.57 4.52 9.88V10.55C4.18 10.74 3.89 10.84 3.53 10.84C2.99 10.84 2.48 10.61 2.12 10.21L2.07 10.15L2 10.11C1.35 9.77 0.95 9.11 0.95 8.38C0.95 8.08 1.02 7.78 1.15 7.51L1.27 7.26L1.15 7C1.02 6.73 0.95 6.44 0.95 6.13C0.95 5.23 1.56 4.45 2.43 4.24L2.74 4.16L2.79 3.82C2.94 2.87 3.74 2.18 4.7 2.18C4.86 2.18 5.01 2.2 5.17 2.24L5.49 2.32L5.67 2.01C6.02 1.41 6.66 1.04 7.34 1.04C7.78 1.04 8.2 1.19 8.54 1.46L8.18 1.82V1.81L7.93 2.07C7.6 2.34 7.19 2.49 7.04 2.47C7.04 2.47 6.37 2.37 6.37 2.36C5.7 2.23 5.5 3.22 6.23 3.38C6.24 3.38 6.9 3.49 6.9 3.49C6.92 3.49 6.95 3.49 6.97 3.5C6.86 3.87 6.82 4.27 6.87 4.62C6.87 4.62 7.04 5.61 7.02 5.61C7.13 6.13 8.08 5.97 7.95 5.43C7.95 5.42 7.8 4.44 7.8 4.44C7.75 4.07 7.92 3.5 8.16 3.25L8.55 2.85C8.6 2.8 8.65 2.76 8.7 2.71L9.44 1.95C9.84 1.77 10.27 1.68 10.71 1.68C12.26 1.68 13.57 2.8 13.82 4.35L13.86 4.6L14.07 4.72C14.68 5.07 15.05 5.72 15.05 6.42C15.05 6.78 14.95 7.12 14.77 7.43Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionPredictiveAnalysisIcon = convertIcon(
  Icon,
  "action-predictive-analysis"
);
export default ActionPredictiveAnalysisIcon;
