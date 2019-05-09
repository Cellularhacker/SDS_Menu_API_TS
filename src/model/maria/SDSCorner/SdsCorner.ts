import Maria from "../common";
import { DicType } from "../../../types/maria";

export default class SDSCorner {
  private client: Maria;

  constructor() {
    this.client = new Maria();
  }
  public ask(id: string): Promise<DicType> {
    return new Promise((resolve, reject) => {
      console.log(`Inside of Function`);
      console.log(
        `query ===>`,
        this.client.conn
          .select(
            this.client.sdsCorner.CornerName,
            this.client.sdsCorner.floor,
            this.client.sdsCorner.location
          )
          .from(this.client.sdsCorner._t_name)
          .where(this.client.sdsCorner.code, id)
          .toSQL()
      );
      this.client.conn
        .select(this.client.sdsCorner.CornerName)
        .from(this.client.sdsCorner._t_name)
        .where(this.client.sdsCorner.code, id)
        .then(res => {
          console.log(`RES=>`, res);
          if (res > 0) {
            return resolve(res[0]);
          } else {
            return resolve({});
          }
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
}
