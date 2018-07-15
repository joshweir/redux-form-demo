import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import FormNavInfo from './FormNavInfo'
import FormNavWrapper from './FormNavWrapper'

const FormNavigator = ({
  currentPage,
  totalPages,
  backDisabled,
  handleBackClick,
  handleNextClick,
  nextDisabled
}) => (
  <FormNavWrapper>
    <Button absolute onClick={handleBackClick} disabled={backDisabled}>
      Back
    </Button>
    {currentPage && (
      <FormNavInfo>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </FormNavInfo>
    )}
    <Button right onClick={handleNextClick} disabled={nextDisabled}>
      Next
    </Button>
  </FormNavWrapper>
)

FormNavigator.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  backDisabled: PropTypes.bool,
  handleBackClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool
}

FormNavigator.defaultProps = {
  currentPage: null,
  totalPages: null,
  nextDisabled: true,
  backDisabled: true
}

export default FormNavigator
