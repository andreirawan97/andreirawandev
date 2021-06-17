import { css } from "@emotion/react";

export default function Row(props) {
  const { style } = props;

  return (
    <div css={[styles.row, style]} {...props}>
      {props.children}
    </div>
  );
}

const styles = {
  row: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    flexGrow: 1,
  }),
};
