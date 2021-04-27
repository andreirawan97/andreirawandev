import { css } from "@emotion/react";
import { Fade } from "react-reveal";
import { SocialIcon } from "react-social-icons";
import Wave from "react-wavify";
import { useHistory } from "react-router-dom";

import { MyImage } from "../assets/";
import { Button } from "../components";
import { aboutMe } from "../constants/aboutMe";
import { colors, fonts } from "../constants/style";
import { Row, Text } from "../core-ui";
import useWindowDimensions from "../helpers/useWindowDimensions";

export default function Home() {
  const history = useHistory();
  const { height } = useWindowDimensions();

  const onViewResumeClick = () => {
    history.push("/resume");
  };

  return (
    <div
      css={[
        styles.root,
        {
          [`@media (max-width: 608px)`]: {
            // TODO: Find a better way to handle this.
            paddingTop:
              height <= 568
                ? 450
                : height <= 667
                ? 350
                : height <= 712
                ? 300
                : height <= 800
                ? 200
                : 120,
          },
        },
      ]}
    >
      <Wave
        fill={colors.mustardYellow}
        paused={false}
        options={{
          height: 25,
          amplitude: 15,
          speed: 0.25,
          points: 3,
        }}
        css={styles.waveBackground}
      />
      <div css={styles.leftColumn}>
        <Fade left>
          <Row style={styles.nameContainer}>
            <Text style={styles.firstName}>Andre</Text>
            <Text style={styles.lastName}>Irawan</Text>
          </Row>
          <Text style={styles.jobTitle}>Software Engineer</Text>

          <div css={styles.customSeparator} />

          <Text style={styles.caption}>{aboutMe.description.line1}</Text>
          <Text style={styles.caption}>{aboutMe.description.line2}</Text>

          <Row style={styles.buttonsContainer}>
            <Button title="View Resume" onClick={onViewResumeClick} />
          </Row>
        </Fade>
      </div>
      <div css={styles.rightColumn}>
        <Fade bottom>
          <img alt="" src={MyImage} css={styles.avatar} />

          <Row style={styles.socialMediaContainer}>
            {/* <SocialIcon
              css={styles.socialMediaIcon}
              url="https://api.whatsapp.com/send?phone=+62812"
            /> */}
            <SocialIcon
              css={styles.socialMediaIcon}
              url="https://www.linkedin.com/in/andre-irawan-baa512168/"
            />
            <SocialIcon
              css={styles.socialMediaIcon}
              url="mailto: andreirawan97@gmail.com"
            />
          </Row>
        </Fade>
      </div>
    </div>
  );
}

const styles = {
  root: css({
    display: "flex",
    width: "100%",
    height: "100vh",
    backgroundColor: colors.darkBlue,
    flexWrap: "wrap-reverse",
    flexDirection: "row",
  }),
  waveBackground: css({
    [`@media (min-width: 608px)`]: {
      position: "absolute",
      zIndex: 0,
      bottom: 0,
    },
  }),
  leftColumn: css({
    paddingLeft: 42,
    paddingRight: 42,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  }),
  rightColumn: css({
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  avatar: css({
    width: 250,
    height: 250,
    borderRadius: 250,
    [`@media (max-width: 608px)`]: {
      width: 150,
      height: 150,
      borderRadius: 150,
    },
  }),
  nameContainer: css({
    marginBottom: 6,
  }),
  firstName: css({
    color: colors.white,
    fontWeight: "bold",
    marginRight: 8,
    fontSize: fonts.sizes.extraLarge,
  }),
  lastName: css({
    fontWeight: "300",
    color: colors.white,
    fontSize: fonts.sizes.extraLarge,
  }),
  jobTitle: css({
    fontWeight: "300",
    color: colors.white,
    marginBottom: 24,
  }),
  customSeparator: css({
    height: 8,
    width: 100,
    backgroundColor: colors.pastelRed,
    marginBottom: 24,
  }),
  caption: css({
    fontWeight: "300",
    color: colors.captionLight,
    marginBottom: 12,
    lineHeight: 1.35,
    fontSize: fonts.sizes.small,
  }),
  buttonsContainer: css({
    marginTop: 12,
  }),
  socialMediaContainer: css({
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 16,
  }),
  socialMediaIcon: css({
    marginRight: 14,
  }),
};
