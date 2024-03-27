import type { DomainMessageCodes } from '@data/messages';

export interface ProfileResponse {
  id: number;
  first_name: string | null;
  last_name: string | null;
  national_code: string | null;
  is_employee: boolean;
  avatar_url: string | null;
  mobile: string;
  is_mobile_verified: boolean;
  email: string | null;
  is_email_verified: boolean;
}

export interface UpdateRequest {
  first_name?: string | null;
  last_name?: string | null;
  national_code?: string | null;
  email?: string | null;
}

export interface UpdateResponse {
  code: DomainMessageCodes;
}
