import Maria from "../common";

export default class Sessions {
  private client: Maria;

  constructor() {
    this.client = new Maria();
  }
  public ask(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.client.conn
        .select(this.client.sessions.id)
        .from(this.client.sessions._t_name)
        .where(this.client.sessions.id, id)
        .then(res => {
          if (res.length > 0) return resolve(true);
          else return resolve(false);
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
}
