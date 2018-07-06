import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchFormData } from '../modules/formWizard/actions'
import {
  getTotalPages,
  getCurrentPage,
  getCurrentPageData
} from '../modules/formWizard/selectors'

class FormWizard extends Component {
  componentWillMount() {
    const { slug, fetchFormData } = this.props
    fetchFormData(slug)
  }

  render() {
    return (
      <div>
        <Form {...this.props} />
        <FormNavigator {...this.props} />
      </div>
    )
  }
}

FormWizard.propTypes = {
  slug: PropTypes.string.isRequired,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  currentPageData: PropTypes.shape({}),
  fetchFormData: PropTypes.func.isRequired
}

FormWizard.defaultProps = {
  totalPages: null,
  currentPage: null,
  currentPageData: {}
}

const mapStateToProps = state => ({
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
  currentPageData: getCurrentPageData(state)
})

export default connect(
  mapStateToProps,
  { fetchFormData }
)(FormWizard)
