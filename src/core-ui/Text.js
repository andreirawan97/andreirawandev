import { css } from "@emotion/react";

import { fonts } from "../constants/style";

export default function Text(props) {
  const { style } = props;

  return (
    <div css={[styles.defaultText, style]} {...props}>
      {props.children}
    </div>
  );
}

const styles = {
  defaultText: css({
    fontSize: fonts.sizes.small,
    display: "flex",
    flexDirection: "row",
  }),
};
