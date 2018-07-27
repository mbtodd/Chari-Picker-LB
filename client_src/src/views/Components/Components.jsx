import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import SectionBasics from "./Sections/SectionBasics.jsx";
// import SectionNavbars from "./Sections/SectionNavbars.jsx";
// import SectionTabs from "./Sections/SectionTabs.jsx";
// import SectionPills from "./Sections/SectionPills.jsx";
// import SectionNotifications from "./Sections/SectionNotifications.jsx";
// import SectionTypography from "./Sections/SectionTypography.jsx";
// import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
// import SectionLogin from "./Sections/SectionLogin.jsx";
import SectionLoginDB from "./Sections/SectionLoginDB.jsx";
import SectionExamples from "./Sections/SectionExamples.jsx";
// import SectionDownload from "./Sections/SectionDownload.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import Small from "components/Typography/Small.jsx";
class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        {/* <img src="../src/assets/img/images/charityLogo.png" alt="..."/>; */}

        <Header
          // img="assets/img/images/charityLogo.png"
          brand="Chari-Picker"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/images/charitable_giving.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 id="redTitle" className={classes.title}>Chari</h1>
                  <h1 className={classes.title}>-Picker</h1>
                  <h3 className={classes.subtitle}>
                    We are dedicated to make giving to charities as easy as possible. With
                    <span id="redTitle_bold"> Chari</span><span id="whiteTitle_bold">-Picker</span>
                    , you will have a convient way to find a charitable cause and be able to donate to it directly from your phone.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          {/* <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript /> */}
          <SectionCarousel />
          {/* <SectionCompletedExamples /> */}
          {/* <SectionLogin /> */}
          {/* <SectionLogin /> */}
          <SectionLoginDB />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button href="../LoginPage/LoginPage.jsx"color="default" size="lg" simple>
                {/* <h3>
                  <small> PLEASE REGISTER HERE</small>
                </h3> */}
                <div className={classes.typo}>
                  <h2>
                    <Small>PLEASE REGISTER HERE</Small>
                  </h2>
                </div>

              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          {/* <SectionDownload /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
