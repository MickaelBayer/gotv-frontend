import ApiManagerService from "../api-manager.service";
import { IVote } from "../../../models/vote.model";
import Axios from "axios";

export default class VoteService extends ApiManagerService<IVote> {
  constructor () {
    super('votes');
  }

  getVoteBySerieId(id: number) {
    return Axios.get<IVote[]>(`${this.BASE_URL}/${this.endpoint}/${id}/serie`).then(res => {
      return res.data;
    })
  }
}