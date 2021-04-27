import { css } from "@emotion/react";

import { colors, fonts } from "../constants/style";
import { Text } from "../core-ui";

export default function Button(props) {
  const { title, containerStyle, onClick } = props;

  return (
    <div css={[styles.default, containerStyle]} onClick={onClick}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </div>
  );
}

const styles = {
  default: css({
    backgroundColor: colors.pastelRed,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 24,
    cursor: "pointer",
  }),
  buttonTitle: css({
    color: colors.white,
    fontSize: fonts.sizes.extraSmall,
  }),
};
