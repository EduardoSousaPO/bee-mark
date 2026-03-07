export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  __InternalSupabase: { PostgrestVersion: "14.1" };
  public: {
    Tables: {
      leads: {
        Row: {
          company_name: string | null;
          consent_lgpd: boolean;
          created_at: string;
          email: string;
          id: string;
          lead_source: string;
          main_bottleneck: string | null;
          message: string | null;
          monthly_revenue_range: string | null;
          name: string;
          notes: string | null;
          segment: string | null;
          service_interest: string | null;
          status: string;
          whatsapp: string;
        };
        Insert: {
          company_name?: string | null;
          consent_lgpd?: boolean;
          created_at?: string;
          email: string;
          id?: string;
          lead_source?: string;
          main_bottleneck?: string | null;
          message?: string | null;
          monthly_revenue_range?: string | null;
          name: string;
          notes?: string | null;
          segment?: string | null;
          service_interest?: string | null;
          status?: string;
          whatsapp: string;
        };
        Update: {
          company_name?: string | null;
          consent_lgpd?: boolean;
          created_at?: string;
          email?: string;
          id?: string;
          lead_source?: string;
          main_bottleneck?: string | null;
          message?: string | null;
          monthly_revenue_range?: string | null;
          name?: string;
          notes?: string | null;
          segment?: string | null;
          service_interest?: string | null;
          status?: string;
          whatsapp?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};

type DefaultSchema = Database["public"];
export type LeadRow = DefaultSchema["Tables"]["leads"]["Row"];
export type LeadInsert = DefaultSchema["Tables"]["leads"]["Insert"];
export type LeadUpdate = DefaultSchema["Tables"]["leads"]["Update"];
