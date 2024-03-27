import type { User } from '@types';

import type { HttpClient } from '../../bridges';
import type { ProfileResponse } from './types';

export default class UserService {
  public constructor(
    private readonly baseUrl: string,
    private readonly client: HttpClient,
  ) {
    this.getProfile = this.getProfile.bind(this);
  }

  public async getProfile(abortSignal?: AbortSignal): Promise<User | null> {
    const profile = await this.client.get<ProfileResponse | null>(
      `${this.baseUrl}/profile`,
      abortSignal,
    );

    if (!profile) return null;
    return {
      id: profile.id,
      firstName: profile.first_name,
      lastName: profile.last_name,
      nationalCode: profile.national_code,
      mobile: profile.mobile,
      isMobileVerified: profile.is_mobile_verified,
      email: profile.email,
      isEmailVerified: profile.is_email_verified,
      avatarUrl: profile.avatar_url,
      isEmployee: profile.is_employee,
    };
  }

  public updateProfile(data: any) {
    return data;
  }
}
