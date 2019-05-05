const maria = require("../../../conf/maria.json");
import Knex from "knex";

export default class Maria {
  public conn: Knex;
  public readonly sdsCorner: SdsCorner = new SdsCorner();
  public readonly sessions: Sessions = new Sessions();

  constructor() {
    console.log(Knex);
    console.log(`type: `, typeof Knex);
    this.conn = Knex(maria as Knex.Config);
  }
}

class SdsCorner {
  public readonly _t_name = "sds_corner";
  public readonly pk: string = "pk";
  public readonly code: string = "code";
  public readonly CornerName: string = "name";
  public readonly location: string = "location";
  public readonly createdAt: string = "created_at";
}
class Sessions {
  public readonly _t_name = "sessions";
  public readonly pk: string = "pk";
  public readonly id: string = "id";
  public readonly userId: string = "user_id";
  public readonly createdAt: string = "created_at";
}
