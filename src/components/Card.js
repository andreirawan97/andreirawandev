import { css } from "@emotion/react";

import { colors, fonts } from "../constants/style";
import { Text } from "../core-ui";

export default function Card(props) {
  const {
    title,
    subtitle,
    content,
    headerSource,
    containerStyle,
    contentContainerStyle,
  } = props;

  return (
    <div css={[styles.container, containerStyle]} {...props}>
      <img alt="" src={headerSource} css={styles.image} />

      <div css={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
        <div css={contentContainerStyle}>{content()}</div>
      </div>
    </div>
  );
}

const styles = {
  container: css({
    borderRadius: 8,
    backgroundColor: colors.white,
  }),
  title: css({
    fontWeight: "bold",
    color: colors.lightCoral,
    fontSize: fonts.sizes.small,
    marginBottom: 6,
  }),
  subTitle: css({
    fontWeight: "600",
    fontSize: fonts.sizes.small,
    marginBottom: 8,
  }),
  image: css({
    borderRadius: 8,
    display: "flex",
    width: "100%",
    height: "auto",
    marginBottom: 12,
  }),
  contentContainer: css({
    padding: 24,
  }),
};
