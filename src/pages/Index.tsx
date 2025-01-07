import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">ROOTHOUSE</h1>
          <div className="text-right">
            <p className="text-sm text-gray-500">Gestión 2023</p>
            <p className="text-sm text-gray-500">Director(a): RODRIGO GARCIA</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-vida-tierra/10">
            <CardHeader>
              <CardTitle className="text-vida-tierra">Vida Tierra Territorio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">4</p>
              <p className="text-sm text-gray-500">Materias Asignadas</p>
            </CardContent>
          </Card>

          <Card className="bg-comunidad/10">
            <CardHeader>
              <CardTitle className="text-comunidad">Comunidad y Sociedad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-gray-500">Materias Asignadas</p>
            </CardContent>
          </Card>

          <Card className="bg-ciencia/10">
            <CardHeader>
              <CardTitle className="text-ciencia">Ciencia y Tecnología</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">6</p>
              <p className="text-sm text-gray-500">Materias Asignadas</p>
            </CardContent>
          </Card>

          <Card className="bg-cosmos/10">
            <CardHeader>
              <CardTitle className="text-cosmos">Cosmos y Pensamiento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-gray-500">Materias Asignadas</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Información General</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Departamento:</strong> LA PAZ</p>
            <p><strong>Distrito Educativo:</strong> 2</p>
            <p><strong>Dependencia:</strong> PRIVADO</p>
            <p><strong>Turno:</strong> TARDE</p>
            <p><strong>Año de Escolaridad:</strong> INICIAL PRIMER AÑO</p>
            <p><strong>Paralelo:</strong> A</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;