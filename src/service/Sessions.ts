import Sessions from "../model/maria/Sessions/Sessions";

const sessions: Sessions = new Sessions();

export default function isValidSession(id: string): Promise<boolean> {
  return sessions.ask(id);
}
