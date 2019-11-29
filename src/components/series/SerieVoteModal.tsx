import React, { useState, ChangeEvent, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Rating } from "@material-ui/lab";
import { IUser } from "../../models/user.model";
import { ISerie } from "../../models/serie.model";
import { bindActionCreators, Dispatch } from "redux";
import { SerieActionTypes } from "../../store/modules/serie/serie.type";
import { postSerieVote } from "../../store/modules/serie/serie.action";
import { connect } from "react-redux";
import { getAllVotesBySerie } from "../../store/modules/vote/vote.action";
import { VoteActionTypes } from "../../store/modules/vote/vote.type";

const mapDispatchToProps = (dispatch: Dispatch<SerieActionTypes | VoteActionTypes>) => ({
  postSerieVote: bindActionCreators(postSerieVote, dispatch),
  getAllVotesBySerie: bindActionCreators(getAllVotesBySerie, dispatch),
})

type Props = ReturnType<typeof mapDispatchToProps> & { user: IUser, serie: ISerie };

const SerieVoteModal: React.FunctionComponent<Props> = (props) => {
  const initialStateVotes = { voe_usr_id: props.user.usr_id, voe_see_id: props.serie.see_id, voe_comment: "" };
  const [vote, setVotes] = useState(initialStateVotes);
  const [votemark, setVotesMark] = useState({ voe_mark: 0 });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (field: string) => (event: ChangeEvent<any>) => {
    event.preventDefault()
    if (field == "voe_mark") {
      setVotesMark({ voe_mark: Number(event.target.value) } as any);
    } else {
      setVotes({ [field]: event.target.value } as any);
    }
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    props.postSerieVote({
      voe_see_id: props.serie.see_id,
      voe_usr_id: props.user.usr_id,
      voe_comment: vote.voe_comment,
      voe_mark: votemark.voe_mark
    });
    handleClose();
  }

  useEffect(() => {
    props.getAllVotesBySerie(props.serie.see_id);
  }, [show]);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow} className="btnVote">
        Voter
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Voter pour {props.serie.see_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Note :</Form.Label>
              <div>
                <Rating value={votemark.voe_mark} name="simple-controlled"
                  onChange={handleChange("voe_mark")} />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Commentaires :</Form.Label>
              <Form.Control
                as="textarea"
                value={vote.voe_comment}
                onChange={handleChange("voe_comment")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" className="btnVote" onClick={handleSubmit}>
            Voter !
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default connect(null, mapDispatchToProps)(SerieVoteModal);