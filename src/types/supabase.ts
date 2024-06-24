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
      category: {
        Row: {
          category: string
          id: number
        }
        Insert: {
          category: string
          id?: number
        }
        Update: {
          category?: string
          id?: number
        }
        Relationships: []
      }
      like: {
        Row: {
          id: string
          store_id: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          store_id?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          store_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "like_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "pop-up store"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "like_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      "pop-up store": {
        Row: {
          category_id: number
          close_date: string
          close_time: string | null
          created_at: string
          id: string
          open_date: string
          open_time: string | null
          reservation_url: string | null
          store_address: string | null
          store_contents: string | null
          store_name: string
        }
        Insert: {
          category_id: number
          close_date: string
          close_time?: string | null
          created_at?: string
          id?: string
          open_date: string
          open_time?: string | null
          reservation_url?: string | null
          store_address?: string | null
          store_contents?: string | null
          store_name: string
        }
        Update: {
          category_id?: number
          close_date?: string
          close_time?: string | null
          created_at?: string
          id?: string
          open_date?: string
          open_time?: string | null
          reservation_url?: string | null
          store_address?: string | null
          store_contents?: string | null
          store_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "pop-up store_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
        ]
      }
      "pop-up store image": {
        Row: {
          id: string
          img_url: string
          store_id: string | null
        }
        Insert: {
          id?: string
          img_url: string
          store_id?: string | null
        }
        Update: {
          id?: string
          img_url?: string
          store_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pop-up store image_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "pop-up store"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          created_at: string
          email: string
          id: string
          nickname: string
          password: string
          provider: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          nickname: string
          password: string
          provider?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          nickname?: string
          password?: string
          provider?: string | null
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
