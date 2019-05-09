import SDSCorner from "../model/maria/SDSCorner/SdsCorner";
import { DicType } from "../types/maria";

const sdsCorner = new SDSCorner();

export default function getCornerName(id: string): Promise<DicType> {
  console.log(`.../service/SDSCorner.ts`);
  return sdsCorner.ask(id);
}
