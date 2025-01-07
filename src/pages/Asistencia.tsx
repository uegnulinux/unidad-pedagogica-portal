import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const students = [
  { id: 1, name: "Juan Pérez", attendance: "P" },
  { id: 2, name: "María García", attendance: "P" },
  { id: 3, name: "Carlos López", attendance: "F" },
  { id: 4, name: "Ana Martínez", attendance: "P" },
  { id: 5, name: "Luis Rodriguez", attendance: "P" },
];

const Asistencia = () => {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Control de Asistencia - {new Date().toLocaleDateString()}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nº</TableHead>
                <TableHead>Nombre del Estudiante</TableHead>
                <TableHead>Asistencia</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded ${
                      student.attendance === "P" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {student.attendance === "P" ? "Presente" : "Falta"}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Asistencia;