import camelCase from "lodash/camelCase";

const capitalizeFirstLetter = s => s[0].toUpperCase() + s.slice(1);
export const getCurrentPage = state => state.formWizard.currentPage;
export const getCurrentPageData = state =>
  state.formWizard.data &&
  state.formWizard.data[state.formWizard.currentPage - 1];
export const getTotalPages = state => state.formWizard.totalPages;
export const getBackDisabled = state =>
  !state.formWizard.currentPage || getCurrentPage(state) <= 1;
export const getNextDisabled = state =>
  !state.formWizard.currentPage ||
  getCurrentPage(state) >= getTotalPages(state);
export const getFormSlug = state => state.formWizard.formName;
export const getFormComponentName = state =>
  capitalizeFirstLetter(
    camelCase(`${getFormSlug(state)}-page-${getCurrentPage(state)}`)
  );
export const getIsFormLoading = state => !state.formWizard.currentPage;
