import getPageStartEnd from "../../uitl/getPageStartEnd.mjs";
import { filmFindMany, filmFindOne } from "./model.mjs";

export const getAll = async (req, res) => {
  //여러개를 조호할떄 무조건 붙는 것. pagination
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const { pageStart, pageEnd } = getPageStartEnd(Number(limit), Number(page));

  try {
    const result = await filmFindMany(pageStart, pageEnd);
    if (!result) return res.status(404).json({ error: "Not Found" });
    // 빈 배열인 경우 어떻게 -> 200 []
    return res.status(200).json({ data: result });
    // 성공하는 요청의 경우 200(성공요청경우 자동으로 200요청된다. 확실하게 하기위해서 적어두어도 된다.)
  } catch (e) {
    //만약 알수없는 에러 발생시 서버 에러 리턴
    return res.status(500).json({ error: e.stack });
  }
};
export const getOne = async (req, res) => {
  const id = Number(req.params.id);
  // id가 없는 경우 not found
  if (!id) return res.status(404).json({ error: "Not Found" });

  try {
    const result = await filmFindOne(id);
    // 아무것도 없으면 not found
    if (!result) return res.status(404).json({ error: "Not Found" });
    return res.status(200).json({ data: result });
  } catch (e) {
    return res.status(500).json({ error: e.stack });
  }
};
