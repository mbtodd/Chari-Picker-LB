import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/CreditCard";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import CreditCard from "../../../../node_modules/@material-ui/icons/CreditCard";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>It's Never To Early To Start Giving Back</h2>
            <h5 className={classes.description}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse alias rerum
              dolorem doloremque unde nisi hic, nobis corporis saepe, consectetur a dolore
              laborum aspernatur iusto nam beatae maiores obcaecati dolor?.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Free Chat"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse alias rerum dolorem doloremque unde nisi hic, nobis corporis saepe, consectetur a dolore laborum aspernatur iusto nam beatae maiores obcaecati dolor?"
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Verified Users"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse alias rerum dolorem doloremque unde nisi hic, nobis corporis saepe, consectetur a dolore laborum aspernatur iusto nam beatae maiores obcaecati dolor?"
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Credit Card"
                description="Secure Credit Card Form for easy, carefree, finacial donations"
                icon={CreditCard}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
