import { RiHeartPulseLine } from "react-icons/ri";
import { TbBrain, TbLockSquare } from "react-icons/tb";
import { BsPersonBoundingBox, BsHeartbreak } from "react-icons/bs";
import { BsDice4 } from "react-icons/bs";

const icon1 = <RiHeartPulseLine />;
const icon2 = <TbBrain />;
const icon3 = <BsHeartbreak />;
const icon4 = <BsPersonBoundingBox />;
const icon5 = <BsDice4 />;
const icon6 = <TbLockSquare />;
const data = [
  {
    id: 1,
    backgroundColor: "#5E4AF5",
    cardTitle: `مقياس الخجل الاجتماعي`,
    cardTitleEn: "Shyness Scale",
    cardTime: `دقائق 3`,
    cardTimeEn: "3 minutes",
    cardIcon: icon1,
  },
  {
    id: 2,
    backgroundColor: "#FFB607",
    cardTitle: `مقياس القلق`,
    cardTitleEn: "Anxiety measurement",
    cardTime: `دقائق 3`,
    cardTimeEn: "3 minutes",
    cardIcon: icon2,
  },
  {
    id: 3,
    backgroundColor: "#466DF6",
    cardTitle: `مقياس الاكتئاب`,
    cardTitleEn: `Depression measurement`,
    cardTime: `دقائق 3`,
    cardTimeEn: "3 minutes",
    cardIcon: icon3,
  },
  {
    id: 4,
    backgroundColor: "#0CC16D",
    cardTitle: `مقياس تقدير الذات`,
    cardTitleEn: "Self Esteem",
    cardTime: `دقائق 5`,
    cardTimeEn: "5 minutes",
    cardIcon: icon4,
  },
  {
    id: 5,
    backgroundColor: "#06B2E2",
    cardTitle: `مقياس الوسواس القهري`,
    cardTitleEn: "Y-BOCS",
    cardTime: `دقائق 5`,
    cardTimeEn: "5 minutes",
    cardIcon: icon5,
  },
  {
    id: 6,
    backgroundColor: "#00517B",
    cardTitle: `مقياس الاحتراق الوظيفي`,
    cardTitleEn: "Burnout Assessment",
    cardTime: `دقائق 5`,
    cardTimeEn: "5 minutes",
    cardIcon: icon6,
  },
];

export default data;
