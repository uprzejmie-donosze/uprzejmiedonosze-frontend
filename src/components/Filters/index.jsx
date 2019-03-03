import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeFilter, addFilter } from '../../store/actions/reportActions';
import { FORM_STATUSES } from '../../consts/formConsts';

import * as S from './styles';

const Checkbox = ({ text, value, statuses, add, remove, reports }) => {
  const checked = statuses.includes(value);
  let itemsLength = value === 'all' ? reports.length : reports.filter(report => report.status === value).length;

  const handleChange = (value) => {
    checked ? remove(value) : add(value);
  };

  return (
    <S.Filter>
      <input type="checkbox" id={value} value={value} checked={checked} onChange={() => handleChange(value)} />
      <label htmlFor={value}>{text} <span>{`(${itemsLength})`}</span></label>
    </S.Filter>
  );
};

class Filters extends Component {
  render() {
    const { filters, addFilter, removeFilter, reports } = this.props;

    return (
      <S.Filters>
        <S.Filters.Title>Filtry</S.Filters.Title>

        <S.Filters.List>
          <Checkbox statuses={filters} reports={reports} add={addFilter} remove={removeFilter} value='all' text="Wszystkie" />
          <Checkbox statuses={filters} reports={reports} add={addFilter} remove={removeFilter} value={FORM_STATUSES.save} text="Zapisano" />
          <Checkbox statuses={filters} reports={reports} add={addFilter} remove={removeFilter} value={FORM_STATUSES.sentEmail} text="Wysłane email" />
          <Checkbox statuses={filters} reports={reports} add={addFilter} remove={removeFilter} value={FORM_STATUSES.visited} text="Po wizycie w SM" />
          <Checkbox statuses={filters} reports={reports} add={addFilter} remove={removeFilter} value={FORM_STATUSES.ignored} text="Zignorowane" />
          <Checkbox statuses={filters} reports={reports} add={addFilter} remove={removeFilter} value={FORM_STATUSES.punished} text="Wystawiono mandat" />
        </S.Filters.List>
      </S.Filters>
    );
  };
};

Filters.propTypes = {
  addFilter: PropTypes.func,
  removeFilter: PropTypes.func,
  filters: PropTypes.array,
  reports: PropTypes.array
};

Checkbox.propTypes = {
  add: PropTypes.func,
  remove: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.string,
  statuses: PropTypes.array,
  reports: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    filters: state.reports.filters,
    reports: state.reports.reports
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFilter: (value) => dispatch(addFilter(value)),
    removeFilter: (value) => dispatch(removeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
