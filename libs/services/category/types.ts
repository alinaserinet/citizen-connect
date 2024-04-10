export interface CategoryRes {
  id: number;
  title: string;
  slug: string;
  icon_url: string | null;
  description: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
