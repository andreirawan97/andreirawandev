import { css } from "@emotion/react";
import React, { useState } from "react";
import { ChevronBackOutline } from "react-ionicons";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import { Timeline, Events, ImageEvent, TextEvent } from "@merc/react-timeline";

import { CsicImage, IfraImage, JsImage, MoreImage, UmnImage } from "../assets";
import { Card, DottedList } from "../components";
import { colors, fonts, mediaQuery } from "../constants/style";
import { Pressable, Text } from "../core-ui";
import { works } from "../data/works";
import { projects } from "../data/projects";

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
          <Text style={styles.header2}>My Latest Projects</Text>
        </Fade>

        <div css={styles.projectsContainer}>
          {projects.map((project) => (
            <div className={styles.projectContainer}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescLight}>{project.description}</Text>

              <div css={styles.projectLinkContainer}>
                <Text
                  style={styles.open}
                  onClick={() => {
                    window.open(project.projectLink);
                  }}
                >
                  Open
                </Text>

                <Text
                  style={styles.viewMore}
                  onClick={() => {
                    window.open(project.viewMore);
                  }}
                >
                  View More
                </Text>
              </div>
            </div>
          ))}
        </div>

        <Fade top>
          <Text style={styles.header2}>My Latest Works</Text>
        </Fade>

        <Timeline theme="">
          <Events>
            {works.map((work) => {
              const {
                date,
                projectDate,
                projectDescription,
                projectOrganization,
                text,
                image,
              } = work;

              return (
                <>
                  {image ? (
                    <ImageEvent date={date} text={text} src={image} alt="Image">
                      <Text style={styles.projectOrganization}>
                        at {projectOrganization}
                      </Text>
                      <Text style={styles.projectDesc}>
                        {projectDescription}
                      </Text>
                      <Text style={styles.projectDate}>{projectDate}</Text>
                    </ImageEvent>
                  ) : (
                    <TextEvent date={date} text={text}>
                      <Text style={styles.projectOrganization}>
                        at {projectOrganization}
                      </Text>
                      <Text style={styles.projectDesc}>
                        {projectDescription}
                      </Text>
                      <Text style={styles.projectDate}>{projectDate}</Text>
                    </TextEvent>
                  )}
                </>
              );
            })}
          </Events>
        </Timeline>

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
  projectsContainer: css({
    marginBottom: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  }),
  projectContainer: css({
    display: "flex",
    flexDirection: "column",
    marginBottom: 12,
  }),
  projectTitle: css({
    marginBottom: 8,
    fontWeight: "bold",
    color: colors.white,
  }),
  projectDescLight: css({
    fontSize: fonts.sizes.extraSmall,
    color: colors.white,
  }),
  projectLinkContainer: css({
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 12,
  }),
  open: css({
    color: colors.pastelRed,
    fontWeight: "bold",
    cursor: "pointer",
    marginRight: 24,
  }),
  viewMore: css({
    color: colors.pastelRed,
    fontWeight: "bold",
    cursor: "pointer",
  }),
};
