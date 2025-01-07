export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      anos_escolaridad: {
        Row: {
          created_at: string
          id: string
          nivel: string
          nombre: string
          paralelo: string
          unidad_educativa_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          nivel: string
          nombre: string
          paralelo: string
          unidad_educativa_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          nivel?: string
          nombre?: string
          paralelo?: string
          unidad_educativa_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "anos_escolaridad_unidad_educativa_id_fkey"
            columns: ["unidad_educativa_id"]
            isOneToOne: false
            referencedRelation: "unidades_educativas"
            referencedColumns: ["id"]
          },
        ]
      }
      campos_educativos: {
        Row: {
          color: string
          created_at: string
          id: string
          nombre: string
        }
        Insert: {
          color: string
          created_at?: string
          id?: string
          nombre: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: string
          nombre?: string
        }
        Relationships: []
      }
      docentes: {
        Row: {
          apellido: string
          ci: string
          created_at: string
          email: string | null
          especialidad: string | null
          id: string
          nombre: string
          telefono: string | null
          unidad_educativa_id: string | null
        }
        Insert: {
          apellido: string
          ci: string
          created_at?: string
          email?: string | null
          especialidad?: string | null
          id?: string
          nombre: string
          telefono?: string | null
          unidad_educativa_id?: string | null
        }
        Update: {
          apellido?: string
          ci?: string
          created_at?: string
          email?: string | null
          especialidad?: string | null
          id?: string
          nombre?: string
          telefono?: string | null
          unidad_educativa_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "docentes_unidad_educativa_id_fkey"
            columns: ["unidad_educativa_id"]
            isOneToOne: false
            referencedRelation: "unidades_educativas"
            referencedColumns: ["id"]
          },
        ]
      }
      estudiantes: {
        Row: {
          ano_escolaridad_id: string | null
          apellido: string
          ci: string | null
          created_at: string
          direccion: string | null
          fecha_nacimiento: string | null
          genero: string | null
          id: string
          nombre: string
          telefono: string | null
        }
        Insert: {
          ano_escolaridad_id?: string | null
          apellido: string
          ci?: string | null
          created_at?: string
          direccion?: string | null
          fecha_nacimiento?: string | null
          genero?: string | null
          id?: string
          nombre: string
          telefono?: string | null
        }
        Update: {
          ano_escolaridad_id?: string | null
          apellido?: string
          ci?: string | null
          created_at?: string
          direccion?: string | null
          fecha_nacimiento?: string | null
          genero?: string | null
          id?: string
          nombre?: string
          telefono?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estudiantes_ano_escolaridad_id_fkey"
            columns: ["ano_escolaridad_id"]
            isOneToOne: false
            referencedRelation: "anos_escolaridad"
            referencedColumns: ["id"]
          },
        ]
      }
      materias: {
        Row: {
          campo_id: string | null
          created_at: string
          id: string
          nombre: string
        }
        Insert: {
          campo_id?: string | null
          created_at?: string
          id?: string
          nombre: string
        }
        Update: {
          campo_id?: string | null
          created_at?: string
          id?: string
          nombre?: string
        }
        Relationships: [
          {
            foreignKeyName: "materias_campo_id_fkey"
            columns: ["campo_id"]
            isOneToOne: false
            referencedRelation: "campos_educativos"
            referencedColumns: ["id"]
          },
        ]
      }
      unidades_educativas: {
        Row: {
          codigo_sie: string | null
          created_at: string
          departamento: string
          dependencia: string
          director: string
          distrito_educativo: string
          id: string
          logo_url: string | null
          nombre: string
          turno: string
          updated_at: string
        }
        Insert: {
          codigo_sie?: string | null
          created_at?: string
          departamento: string
          dependencia: string
          director: string
          distrito_educativo: string
          id?: string
          logo_url?: string | null
          nombre: string
          turno: string
          updated_at?: string
        }
        Update: {
          codigo_sie?: string | null
          created_at?: string
          departamento?: string
          dependencia?: string
          director?: string
          distrito_educativo?: string
          id?: string
          logo_url?: string | null
          nombre?: string
          turno?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
