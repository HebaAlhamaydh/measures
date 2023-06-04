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

const allQuiz = {
  ar: {
    quiz: [
      {
        modalId: 1,
        icon: icon1,
        title: "مقياس الخجل الاجتماعي",
        textOne:
          "الجمل التالية متعلقة بوضعك في مجتمعك المحيط وكيف كانت تجربتك في هذا الموضع",
        textTwo: "من فضلك عبر الى أي مدى تنطبق الجمل التالية عليك",
        scale: "هذه الأداة وفقا لمقياس McCroskey للخجل الاجتماعي",
        backgroundColor: "#5E4AF5",
        questions: [
          {
            id: 1,
            questions: "اناشخص خجول",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 2,
            questions: "الآخرون يعتقدون أنني أتحدث كثيراً",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 3,
            questions: "أنا شخص كثير الكلام",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 4,
            questions: "الآخرون يعتقدون أنني شخص خجول",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 5,
            questions: "عادة ما أتحدث كثيراً",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 6,
            questions: "عادة ما أكون شخص هادئ في الفصل الدراسي",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 7,
            questions: "لا أتحدث كثيراً",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 8,
            questions: "أتحدث عادة أكثر من الآخرين",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 9,
            questions: "أنا شخص هادئ",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },

          {
            id: 10,
            questions: "عادة ما أاحدث عند مجموعات صغيرة 6-3 أشخاص",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 11,
            questions: "معظم الأشخاص يتحدثون اكثر مما أفعل",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 12,
            questions: "أتحدث في الفصل أكثر مما يفعل الأخرون",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
          {
            id: 13,
            questions: "في الغالب الناس عادة أكثر خجلا مني ",
            options: [
              "موافق بشدة",
              "موافق",
              "محايد",
              "لا أوافق",
              "لا أوافق بشدة",
            ],
          },
        ],
      },
      {
        modalId: 2,
        icon: icon2,
        title: "مقياس القلق",
        textOne:
          "سيساعدك هذا الاختبار البسيط في تقييم و معرفة مستوى القلق لديك اجابتك ستساعدنا في تحديد مستوى صحتك النفسية ",
        textTwo:
          "في الأسئلة التالية نرجو ان تخبرناأي من الأعراض تتكرر لديك خلال الأسبوعين الماضيين ",
        scale: "المرجع:اعداد الاطباء روبرت ال سبيتزر , جانيت ",
        backgroundColor: "#FFB607",
        questions: [
          {
            id: 1,
            questions: " الشعور بالتوتر أو القلق الشديد؟",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 2,
            questions: "عدم القدرة على السيطرة على القلق والتفكير الزائد",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 3,
            questions: "فرط التفكير بأكثر من شيئ في نفس اللحظة",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 4,
            questions: "الصعوبة في الاسترخاء و الهدوء",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 5,
            questions:
              "عدم القدرة على الجلوس بهدوء مثل فرط تحريك الأرجل أو فرقعة الأأصابع",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 6,
            questions: "السرعة في الانزعاج أو الانفعال من الأشياء البسيطة",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 7,
            questions: "الشعور بالخوف كما أن مكروها سوف يحدث",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
        ],
      },
      {
        modalId: 3,
        icon: icon3,
        title: "مقياس الاكتئاب",
        textOne:
          "سيساعدك هذا الاختبار البسيط في تقييم و معرفة مستوى الاكتئاب لديك اجابتك ستساعدنا في تحديد مستوى صحتك النفسية ",
        textTwo:
          "في الأسئلة التالية نرجو ان تخبرناأي من الأعراض تتكرر لديك خلال الأسبوعين الماضيين ",
        scale: "المرجع:اعداد الاطباء روبرت ال سبيتزر , جانيت ",
        backgroundColor: "#466DF6",
        questions: [
          {
            id: 1,
            questions:
              "الشعور بقلةأو فقدان الاهتمام أو عدم الاستمتاع بالأمور التي كنت تستمتع بها",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 2,
            questions: "الشعور بالحزن العميق والشعور باليأس",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 3,
            questions: "الصعوبة في النوم أو النوم أكثر من العادة ",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 4,
            questions:
              "الشعور بالتعب أو الصعوبة بالقيام بالأنشطة التي تتطلب جهد بدني",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 5,
            questions: "انخفاض الشهية أو زيادة الرغبة بالأكل على غير المعتاد",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 6,
            questions:
              "الشعور بعدم الرضا عن النفس و جلد الذات أو الشعور بالإحباط",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 7,
            questions: "الشعور بالانزعاج الحاد على الأمور البسيطة",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 8,
            questions: "بطء في الحركة أو الكلام بدرجة ملحوظة من الآخرين",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 9,
            questions: "وجود الأفكار الانتحارية أو الرغبة بإيذاء النفس",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
        ],
      },
      {
        modalId: 4,
        icon: icon4,
        title: "مقياس تقدير الذات",
        textOne:
          "سيساعدك هذا الاختبار البسيط في تقييم حالتك في البداية فان اجابتك على هذه الاسئلة ستساعد المستشار على التعرف عليك و مساعدتك بشكل أفضل أنت لست وحدك لبيه هنا لمساعدتك",
        textTwo:
          "في الأسئلة التالية نرجو ان تخبرناأي من الأعراض تتكرر لديك خلال الاسبوع الماضي ",
        scale:
          "المرجع:الدكتور أحمد أبو سعددليل المقاييس والاختبارات النفسية و التربوية مركز ديبونو لتعليم والتفكير ",
        backgroundColor: "#0CC16D",
        questions: [
          {
            id: 1,
            questions:
              "الشعور بقلةأو فقدان الاهتمام أو عدم الاستمتاع بالأمور التي كنت تستمتع بها",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 2,
            questions: "الشعور بالحزن العميق والشعور باليأس",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 3,
            questions: "الصعوبة في النوم أو النوم أكثر من العادة ",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 4,
            questions:
              "الشعور بالتعب أو الصعوبة بالقيام بالأنشطة التي تتطلب جهد بدني",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 5,
            questions: "انخفاض الشهية أو زيادة الرغبة بالأكل على غير المعتاد",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 6,
            questions:
              "الشعور بعدم الرضا عن النفس و جلد الذات أو الشعور بالإحباط",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 7,
            questions: "الشعور بالانزعاج الحاد على الأمور البسيطة",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 8,
            questions: "بطء في الحركة أو الكلام بدرجة ملحوظة من الآخرين",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
          {
            id: 9,
            questions: "وجود الأفكار الانتحارية أو الرغبة بإيذاء النفس",
            options: [
              "أبدا",
              "بعض الأيام",
              "أكثر من نصف الأيام ",
              "كل يوم تقريباً",
            ],
          },
        ],
      },
      {
        modalId: 5,
        icon: icon5,
        title: "مقياس الوسواس القهري",
        textOne:
          "سيساعدك هذا الاختبار البسيط في تقييم و معرفة مستوى القلق لديك اجابتك ستساعدنا في تحديد مستوى صحتك النفسية ",
        textTwo:
          "في الأسئلة التالية نرجو ان تخبرناأي من الأعراض تتكرر لديك خلال الأسبوعين الماضيين ",
        scale: "المرجع:اعداد الاطباء روبرت ال سبيتزر , جانيت ",
        backgroundColor: "#06B2E2",
        questions: [
          {
            id: 1,
            questions: "بالمجمل أنا راضي عن نفسي",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 2,
            questions: "أحيانا أشعر أنني غير جيد على الاطلاق",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 3,
            questions: "أشعر بأني أمتلك عدد من الصفات الجيدة",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 4,
            questions: "أستطيع القيام بالأمور بشكل جيد كغالبية الناس",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 5,
            questions: "لا أملك الكثير لأفخر به",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 6,
            questions: "أشعر بأني عديم الفائدة أحياناً",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 7,
            questions: "أعتقد أنني شخص له قيمة أو على الأقل مساو للآخرين",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 8,
            questions: "أتمنى ان أحترم نفسي لأكثر",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 9,
            questions: "بشكل عام أميل الى الشعور بأني فاشل",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 10,
            questions: "أنظر الى نفسي بشكل ايجابي",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
        ],
      },
      {
        modalId: 6,
        icon: icon6,
        title: "مقياس الاحتراق الوظيفي",
        textOne:
          "الجمل التالية متعلقة بوضعك في عملك و كيف كانت تجربتك في هذا الوضع",
        textTwo: "من فضلك عبر الى اي مدى تنطبق الجمل التالية عليك",
        scale: "المرجع:اعداد الاطباء روبرت ال سبيتزر , جانيت ",
        backgroundColor: "#00517B",
        questions: [
          {
            id: 1,
            questions: "في عملي أشعر بانني مرهق ذهنياً",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 2,
            questions: "كل ما أقوم فيه في العمل يتطلب جهد عالي جداً",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 3,
            questions: "في نهاية يوم العمل أجد من الصعب ان أستعيد طاقتي",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 4,
            questions: "في العمل أشعلر أنني مرهق جسدياً",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 5,
            questions:
              "عندما أستيقظ في الصباح أفتقر الى الطاقة لبدأيوم جديد في العمل",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 6,
            questions:
              "أريد أن أكون نشيطا في العمل لكن بطريقة ما أنا غير قادر على ذلك",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 7,
            questions: "عندما اجهد نفسي في العمل أشعر بالتعب بسرعة",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 8,
            questions: "في نهاية يوم عملي أشعر بأنني مرهق و مستنزف ذهنياً",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 9,
            questions: "أعاني لأجد أي حماس لعملي",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 10,
            questions:
              "في العمل لا أفكر كثيراً فيما أفعله و أعمل بشكل تلقائي دون تفكير",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 11,
            questions: "أشعر بنفور شديد اتجاه عملي",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 12,
            questions: "أشعر بعدم المبالاة اجاه عملي",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 13,
            questions: "أستخف بما يعنيه عملي للآخرين",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 14,
            questions: "في العمل أواجه صعوبة في الاستمرار بالتركيز",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 15,
            questions: "في العمل أعاني في التفكير بوضوح",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 16,
            questions: "أنا كثير النسيان و مشتت في العمل",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 17,
            questions: "عندما امل اواجه مشكلة في التركيز",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 18,
            questions: "أرتكب أخطاء في عملي لأن ذهني مشغول بأشياء أخرى",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 19,
            questions: "في العمل أشعر بعدم القدرة عللى التحكم بمشاعري",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 20,
            questions:
              "أشعر أنني لا أتعرف على نفسي في الطريققة التي أتفاعل بها عاطفياً في العمل ",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 21,
            questions:
              "أثناء عملي أشعر بالانزعاج عندما لا تسير الامور عللى طريقتي ",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 22,
            questions: "أشعر بالغضب أو الحزن في العمل بدون معرفة السبب",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 23,
            questions: "في العمل قد ابالغ في ردة فعلي بغير قصد",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 24,
            questions: "أواجه صعوبة في النوم او البقاء نائماً",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 25,
            questions: "أنا أميل الى القلق",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 26,
            questions: "أشعر بالشد والتوتر",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 27,
            questions: "أشعر بالقلق و /أو أعاني من نوبات الهلع",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 28,
            questions: "الازعاج و الحشود تزعجني",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 29,
            questions: "أعاني من خفقان في القلب أو ألم في الصدر",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 30,
            questions: "أعاني من مشاكل في المعدة او الأمعاء",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 31,
            questions: "أعاني من الصداع",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 32,
            questions:
              "أعاني من آلام في العضلات على سبيل المثال في الرقبة أو الكتف او الظهر",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
          {
            id: 33,
            questions: "كثيراً ما أصاب في المرض",
            options: ["أبداً", "نادراً", "أحياناً", "غالباً", "دائماً"],
          },
        ],
      },
    ],
  },
  en: {
    quiz: [
      {
        modalId: 1,
        icon: icon1,
        title: "Shyness Scale",
        textOne:
          "The following statements are related to your Social situation and how you experience this situation.",
        textTwo: "Please state how often each statement applies to you ",
        scale: "According to the McCroskeyn Scale Tool",
        backgroundColor: "#5E4AF5",
        questions: [
          {
            id: 1,
            questions: "I am a shy person ",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 2,
            questions: "Other people think i talk a lot",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 3,
            questions: "Iam a very talkative person",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 4,
            questions: "Other people think Iam shy",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 5,
            questions: "I talk a lot",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 6,
            questions: "I tend to be very quite in class",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 7,
            questions: "I dont talk much",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 8,
            questions: "I talk more than most people",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 9,
            questions: "I am a quite person",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },

          {
            id: 10,
            questions: "I talk more in small group (3-6)",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 11,
            questions: "Most people talk more than i do",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 12,
            questions: "Other people think iam very quite",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 13,
            questions: "I talk more in class than most peole do",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
        ],
      },
      {
        modalId: 2,
        icon: icon2,
        title: "Anxiety measurement",
        textOne:
          "This simple test will help you assess and know your level of anxiety. Your answer will help us determine your level of mental health.  ",
        textTwo:
          "In the followung questions, please tell us which of the symptoms you have had over the last two weeks",
        scale:
          "copyright ©1999 Pfizer Inc. All rights reservedReproduced with permission. PRIME-MD© is a trademark of Pfizer Inc.A2663B 10-04-2005",
        backgroundColor: "#FFB607",
        questions: [
          {
            id: 1,
            questions: "Feeling nervous, anxious or on edge?",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 2,
            questions: "Not being able to stop or control worrying?  ",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 3,
            questions: "Worrying too much about different things? ",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 4,
            questions: "Trouble relaxing?",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 5,
            questions: "Being so restless that it is hard to sit still?",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 6,
            questions: "  Becoming easily annoyed or irritable?",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 7,
            questions: "Feeling afraid as if something awful might happen?",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
        ],
      },
      {
        modalId: 3,
        icon: icon3,
        title: "Depression measurement",
        textOne:
          "This simple test will help you assess and know your level of depression. Your answer will help us determine your level of mental health.",
        textTwo:
          "In the following questions please tell us which of the symptoms you have had over the last two weeks.",
        scale:
          "Reference:Copyright©1999 Pfizer Inc.All rights reversed. Reproduced with permission.PRIME-MD© is a trademark of Pfizer Inc.A2663B 10-04-2005    ",
        backgroundColor: "#466DF6",
        questions: [
          {
            id: 1,
            questions:
              "Loss of interest or pleasure in things you previously found enjoyable",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 2,
            questions:
              "Finding no joy in life, or feeling like you never will again",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 3,
            questions: "Oversleeping,or struggling to get to sleep ",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 4,
            questions:
              "Feeling low or under a cloud Being lethargic or having no energy",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 5,
            questions: "Eating too much or too little",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 6,
            questions: "Being harsh on yourself or overly self-critical",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 7,
            questions:
              "Feeling angry,irritable,or frustraed,even over small matters",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 8,
            questions: "Being slow, or moving much less than usual",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
          {
            id: 9,
            questions: "Considering harming yourself, or committing suicide",
            options: ["Never", "Some Days", "Most Days", "Nearly Everyday"],
          },
        ],
      },
      {
        modalId: 4,
        icon: icon4,
        title: "Self Esteem Scale",
        textOne:
          "This simple test wil help initially assess our case, your answer to theses questions would help the ccunselor get to know you and help you better.you are not alone. Labayh here to help you.",
        textTwo:
          "In the following questions, please tell us which of the problems you have had over the last weeek ",
        scale:
          "Reference:Rosenberg,M.(1965).Society and the adolescent self-image. Princeton,NJ:Princeton University Press ",
        backgroundColor: "#0CC16D",
        questions: [
          {
            id: 1,
            questions: "On the whole, I am statiffied with myself",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 2,
            questions: "At times i think Iam not good at all",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 3,
            questions: "I feel that I have a number of good qualities.",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 4,
            questions: " Im able to do things as well as most other people",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 5,
            questions: "i fell i dont have much to be proud of",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 6,
            questions: "I certainly feel useless at time",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 7,
            questions:
              "I feel that Im a pesron o worth, at least on an equal plane with others",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 8,
            questions: "I wish I could have more respect for myself",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
          {
            id: 9,
            questions: "All in all, Iam inclined to feel that Iam a failure   ",
            options: [
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ],
          },
        ],
      },
      {
        modalId: 5,
        icon: icon5,
        title: "OBSESSIVE COMPULSIVE SCALE",
        textOne:
          "This simple test will help initially assess your case, your answer to theses questions would help the counselor get to know you and help you better. you are not alone,Labayh here to help you",
        textTwo:
          "In the following questios, please tell us which of the problems you have had over the last week.",
        scale:
          "Reference:Goodman,W.K,Price,L.H,Rasmussen,S.A et al:The yale-Brown obsessive Compulsive scale. Arch Gen Psychiatry 46:1006-1011,1989",
        backgroundColor: "#06B2E2",
        questions: [
          {
            id: 1,
            questions: "بالمجمل أنا راضي عن نفسي",
            options: [
              " None",
              "Less than 1hr/day",
              "Greater than 1 and up to 3hr/day",
              "Greater than 3 and up to 8hr/day",
              "Greater than 8hr/day",
            ],
          },
          {
            id: 2,
            questions: "أحيانا أشعر أنني غير جيد على الاطلاق",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 3,
            questions: "أشعر بأني أمتلك عدد من الصفات الجيدة",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 4,
            questions: "أستطيع القيام بالأمور بشكل جيد كغالبية الناس",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 5,
            questions: "لا أملك الكثير لأفخر به",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 6,
            questions: "أشعر بأني عديم الفائدة أحياناً",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 7,
            questions: "أعتقد أنني شخص له قيمة أو على الأقل مساو للآخرين",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 8,
            questions: "أتمنى ان أحترم نفسي لأكثر",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 9,
            questions: "بشكل عام أميل الى الشعور بأني فاشل",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
          {
            id: 10,
            questions: "أنظر الى نفسي بشكل ايجابي",
            options: ["موافق بقوة", "موافق", "غير موافق", "غير موافق بقوة"],
          },
        ],
      },
      {
        modalId: 6,
        icon: icon6,
        title: "Burnout Assessment",
        textOne:
          "The following statements are related to your work situation and how you experience this situation",
        textTwo: "Please state how often each statement applies to you ",
        scale: "",
        backgroundColor: "#00517B",
        questions: [
          {
            id: 1,
            questions: "في عملي أشعر بانني مرهق ذهنياً",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 2,
            questions: "كل ما أقوم فيه في العمل يتطلب جهد عالي جداً",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 3,
            questions: "في نهاية يوم العمل أجد من الصعب ان أستعيد طاقتي",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 4,
            questions: "في العمل أشعلر أنني مرهق جسدياً",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 5,
            questions:
              "عندما أستيقظ في الصباح أفتقر الى الطاقة لبدأيوم جديد في العمل",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 6,
            questions:
              "أريد أن أكون نشيطا في العمل لكن بطريقة ما أنا غير قادر على ذلك",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 7,
            questions: "عندما اجهد نفسي في العمل أشعر بالتعب بسرعة",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 8,
            questions: "في نهاية يوم عملي أشعر بأنني مرهق و مستنزف ذهنياً",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 9,
            questions: "أعاني لأجد أي حماس لعملي",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 10,
            questions:
              "في العمل لا أفكر كثيراً فيما أفعله و أعمل بشكل تلقائي دون تفكير",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 11,
            questions: "أشعر بنفور شديد اتجاه عملي",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 12,
            questions: "أشعر بعدم المبالاة اجاه عملي",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 13,
            questions: "أستخف بما يعنيه عملي للآخرين",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 14,
            questions: "في العمل أواجه صعوبة في الاستمرار بالتركيز",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 15,
            questions: "في العمل أعاني في التفكير بوضوح",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 16,
            questions: "أنا كثير النسيان و مشتت في العمل",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 17,
            questions: "عندما امل اواجه مشكلة في التركيز",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 18,
            questions: "أرتكب أخطاء في عملي لأن ذهني مشغول بأشياء أخرى",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 19,
            questions: "في العمل أشعر بعدم القدرة عللى التحكم بمشاعري",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 20,
            questions:
              "أشعر أنني لا أتعرف على نفسي في الطريققة التي أتفاعل بها عاطفياً في العمل ",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 21,
            questions:
              "أثناء عملي أشعر بالانزعاج عندما لا تسير الامور عللى طريقتي ",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 22,
            questions: "أشعر بالغضب أو الحزن في العمل بدون معرفة السبب",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 23,
            questions: "في العمل قد ابالغ في ردة فعلي بغير قصد",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 24,
            questions: "أواجه صعوبة في النوم او البقاء نائماً",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 25,
            questions: "أنا أميل الى القلق",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 26,
            questions: "أشعر بالشد والتوتر",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 27,
            questions: "أشعر بالقلق و /أو أعاني من نوبات الهلع",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 28,
            questions: "الازعاج و الحشود تزعجني",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 29,
            questions: "أعاني من خفقان في القلب أو ألم في الصدر",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 30,
            questions: "أعاني من مشاكل في المعدة او الأمعاء",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 31,
            questions: "أعاني من الصداع",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 32,
            questions:
              "أعاني من آلام في العضلات على سبيل المثال في الرقبة أو الكتف او الظهر",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
          {
            id: 33,
            questions: "كثيراً ما أصاب في المرض",
            options: ["Never", "Rarely", "sometimes", "often", "Always"],
          },
        ],
      },
    ],
  },
};
export default allQuiz;
