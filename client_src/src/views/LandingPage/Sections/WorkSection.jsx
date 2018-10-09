import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

// from Nyt
// import Search from "../../Components/children/Search";
// import Saved from "../../Components/children/Saved";

// Helper Function
import helpers from "../../../utils/helpers";

class WorkSection extends React.Component {


  constructor(props) {

    super(props);

    this.state = {
      searchTerm: "",
      results: [],
      resultToSave: {},
      saved: []
    };

    this.setTerm = this.setTerm.bind(this);
    this.setArticleToSave = this.setArticleToSave.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  // The moment the page renders get saved articles
  componentDidMount() {
    // Get the latest history.
    helpers.getSaved().then(function (response) {
      console.log("These are current saved articles " + response);
      if (response !== this.state.saved) {
        console.log("Saved articles", response.data);
        this.setState({ saved: response.data });
      }
    }.bind(this));
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("Search term updated.");

      helpers.runQuery(this.state.searchTerm).then((data) => {
        if (data !== this.state.results) {
          console.log("Data looks like this: " + data[0].headline.main);

          this.setState({ results: data });
        }
      });
    }
  }

  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  setArticleToSave(index, article) {

    const newState = this.state.resultToSave;
    newState.title = article.title;
    newState.date = article.date;   
    newState.url = article.url;

    this.setState({
      resultToSave: newState
    });
    console.log("We have an article to save in main! " + this.state.resultToSave.title);

    helpers.saveArticle(this.state.resultToSave.title, this.state.resultToSave.date, this.state.resultToSave.url).then((data) => {
      console.log("Save data title looks like this: " + data);

      this.setState(previousState => ({
        saved: [...previousState.saved, this.state.resultToSave],
        results: [...previousState.results.slice(0, index), ...previousState.results.slice(index + 1)]
      }));

    });
  }

  deleteArticle(articleID, index) {
    console.log("This is the id for the article we want to delete: " + articleID);
    helpers.deleteArticle(articleID).then(() => {
      this.setState((prevState) => ({
        saved: [...prevState.saved.slice(0, index), ...prevState.saved.slice(index + 1)]
      }));
    });
  }



  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Where to Find Your CHARITY</h2>
            <h4 className={classes.description}>
              Divide details about your product or agency work into parts. Write
              a few lines about each one and contact us about any further
              collaboration. We will responde get back to you in a couple of
              hours.
            </h4>
            <form>
              <GridContainer>

                {/* start of nyt */}

                {/* <div className="container">
                  <div className="jumbotron">
                  <h3>New York Times Article Scrubber</h3>
                  <p>Search for and annotate articles of interest!</p>
                  </div>
                  <div className="row">
                  <Search setTerm={this.setTerm} setArticleToSave={this.setArticleToSave} saved={this.state.saved} results={this.state.results} resultToSave={this.state.resultToSave} />
                  </div>
                  <div className="row">
                  <Saved saved={this.state.saved} deleteArticle={this.deleteArticle} />
                  </div>
                </div> */}


                <GridItem cs={12} sm={12} md={8}>
                <div>

                <h3 className={classes.section}>Search</h3>
                </div>
                </GridItem>















                {/* of nyt */}


                {/* <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    />
                  </GridItem> */}


                {/* <CustomInput
                  labelText="CHARITY SEARCH"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                /> */}


                  {/* <Button color="danger">SUBMIT</Button> */}
                {/* <CustomInput
                  labelText="RESULTS"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                /> */}
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
