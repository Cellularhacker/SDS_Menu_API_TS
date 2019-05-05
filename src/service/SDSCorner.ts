import SDSCorner from "../model/maria/SDSCorner/SdsCorner";

const sdsCorner = new SDSCorner();

export default function getCornerName(id: string): Promise<string> {
  return sdsCorner.ask(id);
}
