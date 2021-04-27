import { Star, StarOutline } from "react-ionicons";

import { colors } from "../constants/style";
import { Row } from "../core-ui";

export default function Rating(props) {
  const { rating } = props;
  const dummyArr = [1, 2, 3, 4, 5];

  return (
    <Row {...props}>
      {dummyArr.map((_, i) =>
        i < rating ? (
          <Star color={colors.pastelRed} />
        ) : (
          <StarOutline color={colors.pastelRed} />
        )
      )}
    </Row>
  );
}
