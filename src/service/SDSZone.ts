import SDSZone from "../model/maria/SDSZone/SDSZone";
import { DicType } from "../types/maria";

const sdsZone: SDSZone = new SDSZone();

export default function getZoneName(id: string): Promise<DicType> {
  return sdsZone.ask(id);
}
