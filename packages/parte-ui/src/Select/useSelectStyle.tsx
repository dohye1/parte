import { useTheme } from "styled-components";
import { StylesConfig } from "react-select";

const useSelectStyle = ({
  isError,
}: {
  isError: boolean;
}): StylesConfig<Option<unknown>, boolean> => {
  const theme = useTheme();

  return {
    container: (css, props) => {
      return {
        ...css,
        width: "100%",
        backgroundColor: theme.colors.N0,
        svg: {
          color: props.isDisabled ? theme.colors.N500 : theme.colors.N600,
        },
      };
    },
    control: (css, props) => {
      return {
        ...css,
        minHeight: "unset",
        height: "fit-content",
        borderRadius: "4px",
        backgroundColor: theme.colors.N0,
        // 원래는 상하 패딩은 8인데, border는 control 컴포넌트에서 관리하기때문에, boxSizing이 적용안됨
        padding: "7px 10px 7px 12px",
        display: "flex",
        alignItems: "flex-start",
        svg: {
          color: theme.colors.N600,
        },
        "&:hover": {
          borderColor: theme.colors.N600,
          "& div[id$=placeholder]": {
            color: `${theme.colors.N700} !important`,
          },
        },
        ...(props.isFocused
          ? {
              borderColor: `${theme.colors.T300} !important`,
              boxShadow: `0 0 0 2px ${theme.colors.T200}`,
            }
          : {
              boxShadow: "none",
              borderColor: theme.colors.N400,
              "&:hover": {
                borderColor: theme.colors.N600,
                "& div[id$=placeholder]": {
                  color: `${theme.colors.N700} !important`,
                },
              },
            }),
        ...(isError
          ? {
              boxShadow: "none",
              borderColor: `${theme.colors.R400} !important`,
            }
          : {}),
        ...(props.isDisabled
          ? {
              borderColor: theme.colors.N300,
              backgroundColor: `${theme.colors.N100} !important`,
              svg: {
                color: theme.colors.N500,
              },
            }
          : {}),
      };
    },
    groupHeading: (css) => ({
      ...css,
      height: "32px",
      color: theme.colors.N600,
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "16px",
      display: "flex",
      alignItems: "center",
      margin: 0,
      boxSizing: "border-box",
      borderBottom: `1px solid ${theme.colors.N300}`,
    }),
    group: (css) => ({
      ...css,
      padding: "0",
      "&:not(:first-of-type)": {
        borderTop: `1px solid ${theme.colors.N300}`,
      },
    }),
    multiValue: (css, props) => ({
      ...css,
      borderRadius: "4px",
      margin: 0,
      padding: "0 4px",
      display: "flex",
      columnGap: "2px",
      cursor: "pointer",
      ...(isError
        ? {
            backgroundColor: theme.colors.R100,
            "&:hover": {
              div: {
                color: theme.colors.R400,
              },
              "& svg": {
                color: `${theme.colors.R400} !important`,
              },
            },
          }
        : {
            backgroundColor: theme.colors.N200,
            "&:hover": {
              div: {
                color: theme.colors.N600,
              },
              "& svg": {
                color: `${theme.colors.N600} !important`,
              },
            },
          }),
      ...(props.isDisabled ? { backgroundColor: theme.colors.N100 } : {}),
    }),
    multiValueLabel: (css, props) => ({
      ...css,
      padding: "0px !important",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      ...(isError
        ? {
            color: theme.colors.R600,
          }
        : {
            color: theme.colors.N800,
          }),
      ...(props.isDisabled
        ? {
            color: theme.colors.N500,
          }
        : {}),
    }),
    multiValueRemove: (css, props) => ({
      ...css,
      padding: "0px",
      "&:hover": {
        backgroundColor: "transparent",
      },
      ...(isError
        ? {
            svg: { color: `${theme.colors.R600}  !important` },
          }
        : {
            svg: {
              color: `${theme.colors.N800} !important`,
            },
          }),
      ...(props.isDisabled
        ? {
            svg: {
              color: `${theme.colors.N500}  !important`,
            },
          }
        : {}),
    }),
    menu: (css, props) => {
      return {
        ...css,
        marginTop: "4px",
        borderRadius: "4px",
        border: `1px solid ${theme.colors.N300}`,
        overflow: "hidden",
        boxShadow:
          "0px 5px 8px -4px rgba(67, 90, 111, 0.47), 0px 0px 1px rgba(16, 24, 64, 0.3)",
      };
    },
    menuList: (css, props) => {
      return {
        ...css,
        padding: "0",
      };
    },
    valueContainer: (css, props) => {
      return {
        ...css,
        padding: "0",
        paddingLeft: "8px",
        ...(props.isMulti
          ? {
              gap: "8px",
            }
          : {}),
      };
    },
    singleValue: (css, props) => ({
      ...css,
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      color: theme.colors.N800,
      ...(props.isDisabled ? { color: theme.colors.N600 } : {}),
    }),
    placeholder: (css, props) => ({
      ...css,
      padding: 0,
      margin: 0,
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      color: theme.colors.N600,
      ...(props.isFocused ? { color: theme.colors.N700 } : {}),
      ...(props.isDisabled ? { color: theme.colors.N600 } : {}),
    }),
    input: (css, props) => ({
      ...css,
      padding: 0,
      margin: 0,
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      color: theme.colors.N800,
      ...(props.isDisabled ? { color: theme.colors.N600 } : {}),
    }),
    option: (css, props) => {
      return {
        ...css,
        padding: "0 12px",
        minHeight: "32px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        columnGap: "8px",
        color: theme.colors.N800,
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "16px",
        position: "relative",
        cursor: "pointer",
        "&:not(:last-of-type)": {
          borderBottom: `1px solid ${theme.colors.N300}`,
        },
        ":hover": { backgroundColor: theme.colors.N50 },
        "&:active": { background: theme.colors.N50 },
        ...(props.isFocused
          ? { backgroundColor: theme.colors.N50 }
          : {
              backgroundColor: theme.colors.N0,
              ":hover": { backgroundColor: theme.colors.N50 },
            }),
        ...(props.isSelected
          ? {
              backgroundColor: `${theme.colors.T100} !important`,
              color: theme.colors.T400,
              "::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "0px",
                height: "100%",
                borderRadius: "0px 2px 2px 0px",
                backgroundColor: theme.colors.T400,
                width: "2px",
              },
            }
          : {}),

        // ==== icon ====
        svg: props.isSelected
          ? {
              color: theme.colors.T400,
            }
          : {
              color: theme.colors.N700,
            },
        // ==== icon ====
      };
    },
    indicatorsContainer: (css, props) => ({
      ...css,
      padding: "0px",
      paddingLeft: "12px",
      paddingTop: "2px",
      columnGap: "8px",
      alignSelf: "flex-start",
      svg: {
        color: theme.colors.N600,
      },
      ...(props.isDisabled
        ? {
            svg: {
              color: theme.colors.N600,
            },
          }
        : {}),
    }),
    loadingIndicator: (css) => ({ ...css, display: "none" }),
    indicatorSeparator: (css) => ({ ...css, display: "none" }),
    clearIndicator: (css, props) => ({
      ...css,
      padding: 0,
      cursor: "pointer",
      svg: {
        color: theme.colors.N600,
      },
      "&:hover": {
        svg: {
          color: theme.colors.N700,
        },
      },
    }),
    dropdownIndicator: (css, props) => ({
      ...css,
      padding: 0,
      svg: {
        color: theme.colors.N600,
      },
      ...(props.isDisabled ? { color: theme.colors.N600 } : {}),
    }),
  };
};

export default useSelectStyle;
