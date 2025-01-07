import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const schedule = [
  {
    time: "08:30 - 09:55",
    monday: { subject: "LENGUAJE", color: "bg-comunidad" },
    tuesday: { subject: "MATEMÁTICAS", color: "bg-ciencia" },
    wednesday: { subject: "RELIGIÓN", color: "bg-cosmos" },
    thursday: { subject: "PSICOMOTRICIDAD", color: "bg-vida-tierra" },
    friday: { subject: "MÚSICA", color: "bg-comunidad" },
  },
  {
    time: "09:55 - 10:35",
    monday: { subject: "LENGUAJE", color: "bg-comunidad" },
    tuesday: { subject: "MATEMÁTICAS", color: "bg-ciencia" },
    wednesday: { subject: "MÚSICA", color: "bg-comunidad" },
    thursday: { subject: "PSICOMOTRICIDAD", color: "bg-vida-tierra" },
    friday: { subject: "ARTES PLÁSTICAS", color: "bg-ciencia" },
  },
  {
    time: "10:35 - 10:55",
    monday: { subject: "RECREO", color: "bg-gray-200" },
    tuesday: { subject: "RECREO", color: "bg-gray-200" },
    wednesday: { subject: "RECREO", color: "bg-gray-200" },
    thursday: { subject: "RECREO", color: "bg-gray-200" },
    friday: { subject: "RECREO", color: "bg-gray-200" },
  },
];

const Horario = () => {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Horario de Clases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Hora</th>
                  <th className="border p-2">Lunes</th>
                  <th className="border p-2">Martes</th>
                  <th className="border p-2">Miércoles</th>
                  <th className="border p-2">Jueves</th>
                  <th className="border p-2">Viernes</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, index) => (
                  <tr key={index}>
                    <td className="border p-2">{row.time}</td>
                    <td className={`border p-2 ${row.monday.color} text-white text-center`}>
                      {row.monday.subject}
                    </td>
                    <td className={`border p-2 ${row.tuesday.color} text-white text-center`}>
                      {row.tuesday.subject}
                    </td>
                    <td className={`border p-2 ${row.wednesday.color} text-white text-center`}>
                      {row.wednesday.subject}
                    </td>
                    <td className={`border p-2 ${row.thursday.color} text-white text-center`}>
                      {row.thursday.subject}
                    </td>
                    <td className={`border p-2 ${row.friday.color} text-white text-center`}>
                      {row.friday.subject}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Horario;