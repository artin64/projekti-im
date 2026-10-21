export type Task = {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  description: string;
  completed: boolean;
};

export const tasks: Task[] = [
  {
    id: "1",
    title: "Përfundo projektin në React Native",
    course: "Zhvillimi i Aplikacioneve Mobile",
    dueDate: "23 Tetor 2026",
    description: "Ndërto ekranin kryesor, komponentët dhe navigimin e aplikacionit.",
    completed: false,
  },
  {
    id: "2",
    title: "Përgatit databazën SQL",
    course: "Sistemet e Informacionit",
    dueDate: "24 Tetor 2026",
    description: "Krijo tabelat, lidhjet ndërmjet tyre dhe pyetjet kryesore SQL.",
    completed: false,
  },
  {
    id: "3",
    title: "Përsërit TypeScript",
    course: "Programim",
    dueDate: "25 Tetor 2026",
    description: "Përsërit tipet, funksionet, objektet dhe komponentët me props.",
    completed: true,
  },
  {
    id: "4",
    title: "Përgatit prezantimin e projektit",
    course: "Ndërmarrësia Digjitale",
    dueDate: "27 Tetor 2026",
    description: "Përshkruaj problemin, zgjidhjen dhe funksionet kryesore të projektit.",
    completed: false,
  },
  {
    id: "5",
    title: "Praktiko Git dhe GitHub",
    course: "Inxhinieri Softuerike",
    dueDate: "28 Tetor 2026",
    description: "Praktiko commit, push, branch dhe menaxhimin e repository-t.",
    completed: false,
  },
];

export function getTaskById(id: string): Task | undefined {
  return tasks.find((task) => task.id === id);
}
