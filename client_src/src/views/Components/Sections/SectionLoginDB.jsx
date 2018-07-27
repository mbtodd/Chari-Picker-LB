import React from "react";
import axios from 'axios';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// // @material-ui/icons
// import People from "@material-ui/icons/People";
// import LockOutline from "@material-ui/icons/LockOutline";
// import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";
// import { Link } from "react-router-dom";
import SectionItem from './SectionItem'


class SectionLoginDB extends React.Component {

  //charidb hook
  constructor() {
    super();
    this.state = {
      charidbs: []
    }
  }
  componentWillMount() {
    this.getChariDB();
  }

  getChariDB() {
    axios.get('http://localhost:3000/api/charidbs')
      .then(response => {
        this.setState({ charidbs: response.data }, () =>
         {
          console.log(this.state)
        })
      })
  }

  render() {
    
    const { classes } = this.props;
    const loginItems = this.state.charidbs.map((charidb, i) => {
      return (
        <SectionItem key={charidb.id} item={charidb} />
        // <ul className={classes.container}> {charidb.user} </ul>
      )
    });
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                        >
                        <i
                          className={classes.socialIcons + " fab fa-twitter"}
                          />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"   
                        onClick={e => e.preventDefault()}
                        >
                        <i
                          className={classes.socialIcons + " fab fa-facebook"}
                          />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                        >
                        <i
                          className={
                            classes.socialIcons + " fab fa-google-plus-g"
                          }
                          />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>This is Your Registration form</p>
                  <CardBody>
                    <ul> {loginItems} </ul>
                  {/* <p> {loginItems} </p>
                    <CustomInput
                      labelText="First Name"
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutline className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    /> */}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    {/* <link href="./" className={classes.link}> */}
                    <Button simple color="danger" size="lg">
                      Get started
                    </Button>
                    {/* </link> */}
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyle)(SectionLoginDB);
