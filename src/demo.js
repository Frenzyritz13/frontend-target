import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { red } from "@material-ui/core/colors";
import "./navbar";

ReactDOM.render(<navbar />, document.querySelector("#root"));

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: 50,
    minWidth: 500
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 4
  }
});

class SimpleSelect extends React.Component {
  state = {
    age: "",
    name: "hai",
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-readonly">Mentor</InputLabel>
          <Select
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input name="Mentor Name" id="name-readonly" readOnly />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Mentor 1">Hai</MenuItem>
            <MenuItem value="mentor 2">Olivier</MenuItem>
            <MenuItem value="mentor 3">Kevin</MenuItem>
          </Select>
          <FormHelperText>Select Mentor</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-auto-width">TechStack</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={<Input name="age" id="age-auto-width" />}
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Backend</MenuItem>
            <MenuItem value={20}>Frontend</MenuItem>
          </Select>
          <FormHelperText>Auto width</FormHelperText>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={(ref) => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Criteria
          </InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-simple">Criteria</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={<FilledInput name="age" id="filled-age-simple" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
