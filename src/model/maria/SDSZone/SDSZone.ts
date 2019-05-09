import Maria from "../common";
import { DicType } from "../../../types/maria";

export default class SDSZone {
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
          .select(this.client.sdsZone.zoneName)
          .from(this.client.sdsZone._t_name)
          .where(this.client.sdsZone.zoneCode, id)
          .toSQL()
      );
      this.client.conn
        .select(this.client.sdsZone.zoneName)
        .from(this.client.sdsZone._t_name)
        .where(this.client.sdsZone.zoneCode, id)
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
