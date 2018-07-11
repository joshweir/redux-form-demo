import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchFormData } from "../modules/formWizard/actions";
import {
  getBackDisabled,
  getCurrentPage,
  getCurrentPageData,
  getFormComponentName,
  getIsFormLoading,
  getNextDisabled,
  getTotalPages
} from "../modules/formWizard/selectors";
import Form from "../components/Form";
import FormNavigator from "../components/FormNavigator";

class FormWizard extends Component {
  componentWillMount() {
    const { slug, fetchFormData } = this.props;
    fetchFormData(slug);
  }

  render() {
    return (
      <div>
        <Form {...this.props} />
        <FormNavigator {...this.props} />
      </div>
    );
  }
}

FormWizard.propTypes = {
  slug: PropTypes.string.isRequired,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  currentPageData: PropTypes.shape({}),
  fetchFormData: PropTypes.func.isRequired,
  backDisabled: PropTypes.bool.isRequired,
  handleBackClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool.isRequired,
  formComponent: PropTypes.string
};

FormWizard.defaultProps = {
  totalPages: null,
  currentPage: null,
  currentPageData: {},
  formComponent: null
};

const mapStateToProps = state => ({
  backDisabled: getBackDisabled(state),
  currentPage: getCurrentPage(state),
  currentPageData: getCurrentPageData(state),
  formComponent: getFormComponentName(state),
  loading: getIsFormLoading(state),
  nextDisabled: getNextDisabled(state),
  totalPages: getTotalPages(state)
});

export default connect(
  mapStateToProps,
  { fetchFormData }
)(FormWizard);
