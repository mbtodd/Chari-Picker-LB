import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import completedStyle from "assets/jss/material-kit-react/views/componentsSections/completedStyle.jsx";

class SectionCompletedExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Completed with examples</h2>
              <h4>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Blanditiis facilis, 
                sit saepe eligendi ab quaerat natus ex
                ducimus enim porro. Architecto saepe 
                aspernatur corporis est soluta neque, 
                quas voluptas provident.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(completedStyle)(SectionCompletedExamples);
