export interface Request {
  id: number;
  title: string;
  description: string | null;
  user_id: number;
  categoryId: number;
  departmentId: number;
  responsibleId: number | null;
  locationId: number;
  priority: 0 | 1 | 2;
  status: 0 | 1 | 2;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
