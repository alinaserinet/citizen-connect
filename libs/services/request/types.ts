export interface RequestRes {
  id: number;
  title: string;
  description: string | null;
  user_id: number;
  category_id: number;
  department_id: number;
  responsible_id: number | null;
  location_id: number;
  priority: 0 | 1 | 2;
  status: 0 | 1 | 2;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface RequestReq {
  title: string;
  description?: string;
  priority: number;
  category: number;
  location: number;
  department: number;
}
