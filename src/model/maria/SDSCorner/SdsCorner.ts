import Maria from "../common";

export default class SDSCorner {
  private client: Maria;

  constructor() {
    this.client = new Maria();
  }
  public ask(id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.conn
        .select(this.client.sdsCorner.CornerName)
        .from(this.client.sdsCorner._t_name)
        .where(this.client.sdsCorner.code, id)
        .then(res => {
          if (res > 0) {
            return resolve(res[0][this.client.sdsCorner.CornerName]);
          } else {
            return resolve("");
          }
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
}
