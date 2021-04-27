import { css } from "@emotion/react";

export default function Pressable(props) {
  const { onClick, style } = props;

  return (
    <div css={[styles.default, style]} onClick={onClick} {...props}>
      {props.children}
    </div>
  );
}

const styles = {
  default: css({
    cursor: "pointer",
  }),
};
