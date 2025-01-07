import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const studentRecords = [
  {
    id: 1,
    name: "Juan Pérez",
    vidaTierra: "ED",
    comunidad: "DA",
    ciencia: "DO",
    cosmos: "DP",
  },
  {
    id: 2,
    name: "María García",
    vidaTierra: "DO",
    comunidad: "DP",
    ciencia: "DA",
    cosmos: "ED",
  },
];

const Cardex = () => {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Cardex de Estudiantes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p><strong>Nivel:</strong> INICIAL EN FAMILIA COMUNITARIA</p>
                <p><strong>Gestión:</strong> 2023</p>
              </div>
              <div>
                <p><strong>Paralelo:</strong> A</p>
                <p><strong>Trimestre:</strong> PRIMER TRIMESTRE</p>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nº</TableHead>
                  <TableHead>Estudiante</TableHead>
                  <TableHead className="text-vida-tierra">Vida Tierra</TableHead>
                  <TableHead className="text-comunidad">Comunidad</TableHead>
                  <TableHead className="text-ciencia">Ciencia</TableHead>
                  <TableHead className="text-cosmos">Cosmos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.id}</TableCell>
                    <TableCell>{record.name}</TableCell>
                    <TableCell>{record.vidaTierra}</TableCell>
                    <TableCell>{record.comunidad}</TableCell>
                    <TableCell>{record.ciencia}</TableCell>
                    <TableCell>{record.cosmos}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold mb-2">Abreviación de Rangos de Valoración</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p><strong>ED</strong> - En Desarrollo</p>
                <p><strong>DA</strong> - Desarrollo Aceptable</p>
                <p><strong>DO</strong> - Desarrollo Óptimo</p>
                <p><strong>DP</strong> - Desarrollo Pleno</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Cardex;