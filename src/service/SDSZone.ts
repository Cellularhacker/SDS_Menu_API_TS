import SDSZone from "../model/maria/SDSZone/SDSZone";

const sdsZone: SDSZone = new SDSZone();

export default function getZoneName(id: string): Promise<string> {
  return sdsZone.ask(id);
}
