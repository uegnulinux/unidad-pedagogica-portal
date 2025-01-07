import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    date: "2024-02-20",
    subject: "Matemáticas",
    topic: "Números del 1 al 10",
    description: "Reconocimiento y escritura de números",
  },
  {
    date: "2024-02-21",
    subject: "Lenguaje",
    topic: "Vocales",
    description: "Identificación de vocales en palabras simples",
  },
  {
    date: "2024-02-22",
    subject: "Ciencias",
    topic: "Los Animales",
    description: "Clasificación de animales domésticos y salvajes",
  },
];

const Actividades = () => {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Registro de Actividades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{activity.subject}</h3>
                      <p className="text-sm text-gray-500">{activity.topic}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(activity.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Actividades;