import shynessScaleQuestionData from "../../../shynessScaleQuestionData";
export default function handler(req, res) {
  res.status(200).json({ shynessScaleQuestionData });
}
