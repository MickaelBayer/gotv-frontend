import React, { ChangeEvent, Component, useState } from 'react';
import '../../styles/components/searchPage.scss';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { AppState } from '../../store';
import { bindActionCreators, Dispatch } from 'redux';
import { SerieActionTypes } from '../../store/modules/serie/serie.type';
import { getSearchSeries } from '../../store/modules/serie/serie.action';
import { connect } from 'react-redux';
import { setShowSearch } from '../../store/modules/other/other.action';
import { Link } from "react-router-dom";

const mapStateToProps = (state: AppState) => ({
  series: state.searchSeries.searchSeries,
  isLoading: state.searchSeries.isLoading,
  searchShow: state.other.showSearch
});

const mapDispatchToProps = (dispatch: Dispatch<SerieActionTypes>) => ({
  getSearchSeries: bindActionCreators(getSearchSeries, dispatch),
  setSearchShow: bindActionCreators(setShowSearch, dispatch)
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const SearchPage: React.FunctionComponent<Props> = props => {
  const [searchText, setValue] = useState({ searchText: '' });

  const handleChangeSearchText = () => (event: ChangeEvent<any>) => {
    event.preventDefault();
    setValue({ searchText: event.target.value.toString() });
    props.getSearchSeries(searchText.searchText);
  };

  return (
    <React.Fragment>
      {props.searchShow ? <div className="searchPage">
        <div className="closeBtn" onClick={() => props.setSearchShow(false)}>
          <div className="croix">
            X
        </div>
        </div>
        <InputGroup className="searchInput">
          <FormControl
            className="personalizeInput"
            placeholder="Rechercher"
            value={searchText.searchText}
            onChange={handleChangeSearchText()}
          />
        </InputGroup>
        <div className="searchZone">
          {props.isLoading
            ? ""
            : props.series.map((serie, i) => {
              return <div key={i} className="linkSearchSerie" onClick={() => props.setSearchShow(false)}>
                <Link to={{ pathname: `/serie/${serie.see_id}`, state: { serie: serie } }}>{serie.see_name}</Link>
              </div>;
            })}
        </div>
      </div> : <></>}
    </React.Fragment>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
