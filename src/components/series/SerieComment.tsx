import React, { useEffect } from "react";
import accountUser from "../../assets/user_account.png";
import { Rating } from "@material-ui/lab";
import { ISerie } from "../../models/serie.model";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import { bindActionCreators, Dispatch } from "redux";
import { VoteActionTypes } from "../../store/modules/vote/vote.type";
import { getAllVotesBySerie } from "../../store/modules/vote/vote.action";

const mapStateToProps = (state: AppState) => ({
  votes: state.vote.votes,
  isLoading: state.vote.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<VoteActionTypes>) => ({
  getAllVotesBySerie: bindActionCreators(getAllVotesBySerie, dispatch)
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { serie: ISerie };

const SerieComment: React.FunctionComponent<Props> = (props) => {

  useEffect(() => {
    props.getAllVotesBySerie(props.serie.see_id);
  }, []);
  return (
    <React.Fragment>
      <h4 className="title title-small">{props.votes.length} Commentaires</h4>
      {props.isLoading ? <Spinner animation="border" /> :
        props.votes.sort((a, b) => {
          if (a.voe_user.usr_role.roe_id > b.voe_user.usr_role.roe_id) {
            return 1;
          }
          if (a.voe_user.usr_role.roe_id < b.voe_user.usr_role.roe_id) {
            return -1;
          }
          return 0;
        }).map((vote, i) => {
          return (
            <React.Fragment key={i}>
              {vote.voe_user.usr_role.roe_id == 2 ?
                <div className="details-comment-expert" >
                  <img className="details-comment-avatar-expert" src={accountUser} />
                  <div className="details-comment-body">
                    <span className="details-comment-author-expert">{vote.voe_user.usr_pseudo}</span>
                    <Rating value={vote.voe_mark} size="small" precision={0.5} readOnly className="details-comment-rating" />
                    <span className="details-comment-date-expert">{vote.created_at}</span>
                    <div className="details-comment-text-expert">
                      <div>
                        <p>{vote.voe_comment}</p>
                      </div>
                    </div>
                  </div>
                </div> :
                <div className="details-comment" key={i}>
                  <img className="details-comment-avatar" src={accountUser} />
                  <div className="details-comment-body">
                    <span className="details-comment-author">{vote.voe_user.usr_pseudo}</span>
                    <Rating value={vote.voe_mark} size="small" precision={0.5} readOnly className="details-comment-rating" />
                    <span className="details-comment-date">{vote.created_at}</span>
                    <div className="details-comment-text">
                      <div>
                        <p>{vote.voe_comment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </React.Fragment>
          )
        })}
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieComment);