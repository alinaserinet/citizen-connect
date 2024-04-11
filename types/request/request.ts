export interface Request {
  id: number;
  title: string;
  description: string | null;
  userId: number;
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
