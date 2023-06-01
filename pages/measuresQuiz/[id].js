// import allQuiz from "../../allQuiz";
// import ModalShyness from "../../components/ModalShynees/ModalShyness";

// export default function ModalsShyneesQuizs({ props }) {
//   return <ModalShyness data={data} />;
// }

// export async function getStaticPaths() {
//   const res = await fetch("");
//   const data = await res.json();
//   const paths = data.map((item) => {
//     return {
//       params: { id: item.id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: true,
//   };
// return {
//   paths: [
//     { params: { id: "1" } },
//     { params: { id: "2" } },
//     { params: { id: "3" } },
//     { params: { id: "4" } },
//     { params: { id: "5" } },
//   ],
//   fallback: false,
// };
// }

// export async function getStaticProps(context) {
// const id = context.params.id;
// const res = await fetch("http://localhost:3000/api/scales");
// const data = await res.json();
//   const { params } = context;
//   const { id } = params;
//   const quiz = allQuiz.find((q) => q.modalId === parseInt(id));
//   console.log(quiz);
//   return {
//     props: { quiz },
//   };
// }
