import { css } from "@emotion/react";
import { useState } from "react";
import { ChevronBackOutline } from "react-ionicons";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import { Timeline, Events, ImageEvent, TextEvent } from "@merc/react-timeline";

import {
  AvpnImage,
  CsicImage,
  DBOImage,
  IfraImage,
  InsightsImage,
  JsImage,
  MoreImage,
  PruHubImage,
  UmnImage,
  VisionUIImage,
} from "../assets";
import { Card, DottedList } from "../components";
import { colors, fonts, mediaQuery } from "../constants/style";
import { Pressable, Text } from "../core-ui";

export default function Resume() {
  const history = useHistory();

  const [showBackText, setShowBackText] = useState(false);

  const onMouseEnterBackIcon = () => {
    setShowBackText(true);
  };

  const onMouseLeaveBackIcon = () => {
    setShowBackText(false);
  };

  const onClickBack = () => {
    history.goBack();
  };

  return (
    <div css={styles.root}>
      <Pressable
        style={styles.backContainer}
        onMouseOver={onMouseEnterBackIcon}
        onMouseLeave={onMouseLeaveBackIcon}
        onClick={onClickBack}
      >
        <ChevronBackOutline
          color={colors.pastelRed}
          title="Go b4ck"
          height="35px"
          width="35px"
        />
        <Fade left duration={500} when={showBackText}>
          <Text style={styles.backText}>Back</Text>
        </Fade>
      </Pressable>

      <div css={styles.contentContainer}>
        <Fade top>
          <Text style={styles.header1}>QUALIFICATION</Text>
          <Text style={styles.header2}>Educational Training</Text>

          <Card
            title="Universitas Multimedia Nusantara"
            subtitle="Bachelor in Computer Science"
            headerSource={UmnImage}
            content={() => (
              <div css={styles.educationalCaptionContainer}>
                <DottedList>
                  <Text style={styles.educationCaption}>
                    Enrolled since 2017 to 2021
                  </Text>
                </DottedList>

                <DottedList>
                  <Text style={styles.educationCaption}>
                    Member of Event Division in Integral 2018
                  </Text>
                </DottedList>
                <DottedList>
                  <Text style={styles.educationCaption}>
                    Member of Student Welfare Division in Informatics Student
                    Association 2019
                  </Text>
                </DottedList>
                <DottedList>
                  <Text style={styles.educationCaption}>
                    President of Informatics New Student Orientation 2019
                  </Text>
                </DottedList>
                <DottedList>
                  <Text style={styles.educationCaption}>
                    Coordinators of Security Division in Informatics Gathering
                    2019
                  </Text>
                </DottedList>
              </div>
            )}
          />
        </Fade>

        <div css={styles.dotSeparator} />

        <Fade top>
          <Text style={styles.header1}>AWARDS</Text>
          <Text style={styles.header2}>My Achievements</Text>
        </Fade>

        <Fade>
          <img alt="" src={CsicImage} css={styles.image} />
          <Text style={styles.achievementText}>
            1st Place in Computer Science Innovation Challenge (CSIC) 2017
          </Text>
        </Fade>

        <div css={styles.customSeparator} />

        <Fade>
          <img alt="" src={IfraImage} css={styles.image} />
          <Text style={styles.achievementText}>
            1st Place in IFRAPreneur Business Concept Competition (IFBCC) 2018
          </Text>
        </Fade>

        <div css={styles.dotSeparator} />

        <div css={styles.skillsContainer}>
          <Fade top>
            <Text style={styles.header1margin30}>EXPERTISE</Text>
            <Text style={styles.header2dark}>My Skills</Text>
          </Fade>

          <div css={styles.skillListContainer}>
            <Fade left>
              <div css={styles.skillContainer}>
                <img
                  alt=""
                  src={JsImage}
                  width={80}
                  height={80}
                  css={styles.borderRadiusImg}
                />

                <Text style={styles.skillHeader}>Javascript</Text>

                <div>
                  <DottedList>
                    <Text style={styles.skillText}>React Native</Text>
                  </DottedList>
                  <DottedList>
                    <Text style={styles.skillText}>AngularJS</Text>
                  </DottedList>
                  <DottedList>
                    <Text style={styles.skillText}>React</Text>
                  </DottedList>
                  <DottedList>
                    <Text style={styles.skillText}>NodeJS</Text>
                  </DottedList>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div css={styles.skillContainer}>
                <img
                  alt=""
                  src={MoreImage}
                  width={80}
                  height={80}
                  css={styles.borderRadiusImg}
                />

                <Text style={styles.skillHeader}>Others</Text>

                <div>
                  <DottedList>
                    <Text style={styles.skillText}>C</Text>
                  </DottedList>
                  <DottedList>
                    <Text style={styles.skillText}>Java</Text>
                  </DottedList>
                  <DottedList>
                    <Text style={styles.skillText}>Flutter</Text>
                  </DottedList>
                  <DottedList>
                    <Text style={styles.skillText}>Swift</Text>
                  </DottedList>
                  <DottedList>
                    <Text style={styles.skillText}>Python</Text>
                  </DottedList>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <Fade top>
          <Text style={styles.header1}>Projects</Text>
          <Text style={styles.header2}>My Latest Works and Projects</Text>
        </Fade>

        <Timeline theme="">
          <Events>
            <TextEvent date="2017" text="**Inventory App**">
              <Text style={styles.projectOrganization}>
                at 70 Farenheit Koffie
              </Text>
              <Text style={styles.projectDesc}>
                Making a simple inventory app for managing stock.
              </Text>

              <Text style={styles.projectDate}>January 2017-July 2017</Text>
            </TextEvent>

            <ImageEvent
              date="2019"
              text="**AVPN 2019**"
              src={AvpnImage}
              alt="AVPN"
            >
              <Text style={styles.projectOrganization}>at KodeFox, Inc</Text>
              <Text style={styles.projectDesc}>
                AVPN is a conference app that helps attendance to view venue,
                chat with speaker, and see schedules
              </Text>
              <Text style={styles.projectDate}>April 2019 - July 2019</Text>
            </ImageEvent>

            <ImageEvent
              date="2019"
              text="**Vision-UI**"
              src={VisionUIImage}
              alt="VISION UI"
            >
              <Text style={styles.projectOrganization}>at KodeFox, Inc</Text>
              <Text style={styles.projectDesc}>
                Vision-UI is a framework for rendering mobile apps using JSON.
              </Text>
              <Text style={styles.projectDate}>July 2019 - October 2019</Text>
            </ImageEvent>

            <ImageEvent
              date="2019"
              text="**Insights**"
              src={InsightsImage}
              alt="insights"
            >
              <Text style={styles.projectOrganization}>at KodeFox, Inc</Text>
              <Text style={styles.projectDesc}>
                Insights is a web app that helps Project Manager to track
                project and helps Client to see their app status and progress.
              </Text>
              <Text style={styles.projectDate}>
                October 2019 - December 2019
              </Text>
            </ImageEvent>
            <ImageEvent
              date="2020"
              text="**PruHub**"
              src={PruHubImage}
              alt="PruHub"
            >
              <Text style={styles.projectOrganization}>at KodeFox, Inc</Text>
              <Text style={styles.projectDesc}>
                Developing Prudential internal application using Vision-UI
              </Text>
              <Text style={styles.projectDate}>January 2020 - August 2020</Text>
            </ImageEvent>
            <ImageEvent date="2021" text="**DBO**" src={DBOImage} alt="DBO">
              <Text style={styles.projectOrganization}>at KodeFox, Inc</Text>
              <Text style={styles.projectDesc}>
                DBO or Depo Bangunan Online is an app to help business owner to
                procure stuffs.
              </Text>
              <Text style={styles.projectDate}>February 2021 - Present</Text>
            </ImageEvent>
          </Events>
        </Timeline>

        {/* <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: colors.white }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.white}` }}
            date="January 2017 - July 2017"
            dateClassName="projectDate"
            iconStyle={{
              background: colors.pastelRed,
            }}
            icon={<CodeWorking color={colors.white} />}
          >
            <h3 className="vertical-timeline-element-title">Inventory App</h3>
            <h4 className="vertical-timeline-element-subtitle">
              at 70 Farenheit Koffie
            </h4>
            <p>Making a simple inventory app for managing stock.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="April 2019 - July 2019"
            dateClassName="projectDate"
            iconStyle={{ background: colors.avpnGreen, color: "#fff" }}
            icon={<CodeWorking />}
            contentStyle={{ background: colors.white }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.white}` }}
          >
            <h3 className="vertical-timeline-element-title">AVPN 2019</h3>
            <h4 className="vertical-timeline-element-subtitle">
              at KodeFox, Inc
            </h4>
            <div css={styles.projectImage}>
              <img alt="" src={AvpnImage} width={150} height={80} />
            </div>
            <p>
              AVPN is a conference app that helps attendance to view venue, chat
              with speaker, and see schedules
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="July 2019 - October 2019"
            dateClassName="projectDate"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<CodeWorking />}
            contentStyle={{ background: colors.white }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.white}` }}
          >
            <h3 className="vertical-timeline-element-title">Vision-UI</h3>
            <h4 className="vertical-timeline-element-subtitle">
              at KodeFox, Inc
            </h4>
            <div css={styles.projectImage}>
              <img alt="" src={VisionUIImage} width={70} height={70} />
            </div>
            <p>
              Vision-UI is a framework for rendering mobile apps using JSON.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="October 2019 - December 2019"
            dateClassName="projectDate"
            iconStyle={{ background: colors.insightsYellow, color: "#fff" }}
            icon={<CodeWorking />}
            contentStyle={{ background: colors.white }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.white}` }}
          >
            <h3 className="vertical-timeline-element-title">Insights</h3>
            <h4 className="vertical-timeline-element-subtitle">
              at KodeFox, Inc
            </h4>
            <div css={styles.projectImage}>
              <img alt="" src={InsightsImage} width={150} height={40} />
            </div>
            <p>
              Insights is a web app that helps Project Manager to track project
              and helps Client to see their app status and progress.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="January 2020 - August 2020"
            dateClassName="projectDate"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<CodeWorking />}
            contentStyle={{ background: colors.white }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.white}` }}
          >
            <h3 className="vertical-timeline-element-title">Vision-UI 2.0</h3>
            <h4 className="vertical-timeline-element-subtitle">
              at KodeFox, Inc
            </h4>
            <div css={styles.projectImage}>
              <img alt="" src={VisionUIImage} width={70} height={70} />
            </div>
            <div css={styles.projectImage}>
              <img alt="" src={PruHubImage} width={150} height={45} />
            </div>
            <p>
              Like the previous one but this time develop an internal app from
              Prudential using Vision-UI framework.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="February 2021 - Present"
            dateClassName="projectDate"
            iconStyle={{ background: colors.dboBlue, color: "#fff" }}
            icon={<CodeWorking />}
            contentStyle={{ background: colors.white }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.white}` }}
          >
            <h3 className="vertical-timeline-element-title">DBO</h3>
            <h4 className="vertical-timeline-element-subtitle">
              at KodeFox, Inc
            </h4>
            <div css={styles.projectImage}>
              <img alt="" src={DBOImage} width={70} height={70} />
            </div>
            <p>
              DBO or Depo Bangunan Online is an app to help business owner to
              procure stuffs.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline> */}
        <div css={styles.dotSeparator} />
      </div>
    </div>
  );
}

const styles = {
  root: css({
    backgroundColor: colors.darkBlue,
    display: "flex",
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 24,
    paddingBottom: 120,
  }),
  backContainer: css({
    flexDirection: "row",
    display: "flex",
    alignSelf: "flex-start",
    alignItems: "center",
    width: 120,
    marginLeft: 24,
    marginBottom: 24,
  }),
  backText: css({
    color: colors.pastelRed,
    fontWeight: "bold",
    fontSize: fonts.sizes.medium,
  }),
  header1: css({
    fontSize: fonts.sizes.extraSmall,
    fontWeight: "bold",
    color: colors.pastelRed,
    alignSelf: "center",
    marginTop: 60,
  }),
  header1margin30: css({
    fontSize: fonts.sizes.extraSmall,
    fontWeight: "bold",
    color: colors.pastelRed,
    alignSelf: "center",
    marginTop: 30,
  }),
  header2: css({
    fontSize: fonts.sizes.default,
    fontWeight: "bold",
    marginBottom: 60,
    color: colors.white,
  }),
  header2dark: css({
    fontSize: fonts.sizes.default,
    fontWeight: "bold",
    marginBottom: 60,
  }),
  image: css({
    borderRadius: 8,
    display: "flex",
    width: "100%",
    height: "auto",
    marginBottom: 12,
  }),
  customSeparator: css({
    height: 8,
    width: 100,
    backgroundColor: colors.pastelRed,
    marginTop: 20,
    marginBottom: 20,
  }),
  customSeparatorVertical: css({
    height: 100,
    width: 8,
    backgroundColor: colors.pastelRed,
  }),
  dotSeparator: css({
    width: 15,
    height: 15,
    borderRadius: 15,
    marginTop: 60,
    backgroundColor: colors.pastelRed,
  }),
  contentContainer: css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    marginBottom: 12,
    [mediaQuery.maxWidth]: {
      width: "100%",
    },
  }),
  educationCaption: css({
    fontSize: fonts.sizes.extraSmall,
  }),
  achievementText: css({
    fontSize: fonts.sizes.extraSmall,
    color: colors.white,
    fontWeight: "600",
    textAlign: "center",
  }),
  skillsContainer: css({
    backgroundColor: colors.white,
    borderRadius: 8,
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
  }),
  skillHeader: css({
    color: colors.pastelRed,
    fontSize: fonts.sizes.default,
    fontWeight: "bold",
    marginBottom: 12,
  }),
  borderRadiusImg: css({
    borderRadius: 8,
    marginBottom: 12,
  }),
  skillListContainer: css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  }),
  skillContainer: css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginRight: 20,
    marginLeft: 20,
  }),
  skillText: css({
    fontSize: fonts.sizes.extraSmall,
  }),
  projectImage: css({
    display: "flex",
    justifyContent: "center",
    marginTop: 21,
  }),
  projectOrganization: css({
    fontSize: fonts.sizes.extraSmall,
    fontWeight: "300",
    marginTop: 8,
    marginBottom: 8,
  }),
  projectDesc: css({
    fontSize: fonts.sizes.extraSmall,
  }),
  projectDate: css({
    fontSize: fonts.sizes.ant,
    color: colors.deepPink,
    marginTop: 12,
  }),
};
