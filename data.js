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
const data = {
  ar: {
    data: [
      {
        id: 1,
        backgroundColor: "#5E4AF5",
        cardTitle: `مقياس الخجل الاجتماعي`,
        cardTime: `دقائق 3`,
        cardIcon: icon1,
      },
      {
        id: 2,
        backgroundColor: "#FFB607",
        cardTitle: `مقياس القلق`,
        cardTime: `دقائق 3`,
        cardIcon: icon2,
      },
      {
        id: 3,
        backgroundColor: "#466DF6",
        cardTitle: `مقياس الاكتئاب`,
        cardTime: `دقائق 3`,
        cardIcon: icon3,
      },
      {
        id: 4,
        backgroundColor: "#0CC16D",
        cardTitle: `مقياس تقدير الذات`,
        cardTime: `دقائق 5`,
        cardIcon: icon4,
      },
      {
        id: 5,
        backgroundColor: "#06B2E2",
        cardTitle: `مقياس الوسواس القهري`,
        cardTime: `دقائق 5`,
        cardIcon: icon5,
      },
      {
        id: 6,
        backgroundColor: "#00517B",
        cardTitle: `مقياس الاحتراق الوظيفي`,
        cardTime: `دقائق 5`,
        cardIcon: icon6,
      },
    ],
  },
  en: {
    data: [
      {
        id: 1,
        backgroundColor: "#5E4AF5",
        cardTitle: `Shyness Scale`,
        cardTime: "3 minutes",
        cardIcon: icon1,
      },
      {
        id: 2,
        backgroundColor: "#FFB607",
        cardTitle: "Anxiety measurement",
        cardTime: "3 minutes",
        cardIcon: icon2,
      },
      {
        id: 3,
        backgroundColor: "#466DF6",
        cardTitle: `Depression measurement`,
        cardTime: "3 minutes",
        cardIcon: icon3,
      },
      {
        id: 4,
        backgroundColor: "#0CC16D",
        cardTitle: "Self Esteem",
        cardTime: "5 minutes",
        cardIcon: icon4,
      },
      {
        id: 5,
        backgroundColor: "#06B2E2",
        cardTitle: "Y-BOCS",
        cardTime: "5 minutes",
        cardIcon: icon5,
      },
      {
        id: 6,
        backgroundColor: "#00517B",
        cardTitle: "Burnout Assessment",
        cardTime: "5 minutes",
        cardIcon: icon6,
      },
    ],
  },
};

export default data;
