export default interface User {
  id: number;
  firstName: string | null;
  lastName: string | null;
  nationalCode: string | null;
  isEmployee: boolean;
  avatarUrl: string | null;
  mobile: string;
  isMobileVerified: boolean;
  email: string | null;
  isEmailVerified: boolean;
}
