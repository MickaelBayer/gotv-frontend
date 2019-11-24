import ApiManagerService from "../api-manager.service";
import { IVote } from "../../../models/vote.model";

export default class VoteService extends ApiManagerService<IVote> {
  constructor() {
    super('votes');
  }
}