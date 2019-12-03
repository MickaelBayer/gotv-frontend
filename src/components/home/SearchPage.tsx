import React, { ChangeEvent, Component, useState } from 'react';
import '../../styles/components/searchPage.scss';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { AppState } from '../../store';
import { bindActionCreators, Dispatch } from 'redux';
import { SerieActionTypes } from '../../store/modules/serie/serie.type';
import {
  getAllSeries,
  getBestSeries,
  getSearchSeries
} from '../../store/modules/serie/serie.action';
import { ISerie } from '../../models/serie.model';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => ({
  series: state.series.series,
  isLoading: state.series.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch<SerieActionTypes>) => ({
  getSearchSeries: bindActionCreators(getSearchSeries, dispatch)
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const SearchPage: React.FunctionComponent<Props> = props => {
  function reloadPage() {
    window.location.reload();
  }
  const [searchText, setValue] = useState({bob: ""});
  const handleChangeSearchText = () => (event: ChangeEvent<any>) => {
    event.preventDefault();
    setValue({ bob: event.target.value.toString() });
  };

  return (
    <div className="searchPage">
      <div className="closeBtn">
        <div className="croix" onClick={reloadPage}>
          X
        </div>
      </div>
      <InputGroup className="searchInput">
        <FormControl
          className="personalizeInput"
          placeholder="Rechercher"
          value={searchText}
          onChange={handleChangeSearchText}
        />
      </InputGroup>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
