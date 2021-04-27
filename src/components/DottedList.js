import { css } from "@emotion/react";
import { colors } from "../constants/style";

export default function DottedList(props) {
  return (
    <div css={styles.container}>
      <div css={styles.dot} />
      <div css={styles.contentContainer}>{props.children}</div>
    </div>
  );
}

const styles = {
  container: css({
    display: "flex",
    flexDirection: "row",
    marginBottom: 6,
    paddingLeft: 2,
  }),
  dot: css({
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: colors.mustardYellow,
    marginRight: 8,
    marginTop: 5,
  }),
  contentContainer: css({
    display: "flex",
    flex: 1,
  }),
};
