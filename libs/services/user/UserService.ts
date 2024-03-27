import messages from '@data/messages';
import type { HttpClient } from '@libs/bridges';
import type { User, UserInput } from '@types';

import type { ProfileResponse, UpdateRequest, UpdateResponse } from './types';

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

  public async updateProfile(data: Partial<UserInput>) {
    const { code } = await this.client.put<UpdateRequest, UpdateResponse>(
      `${this.baseUrl}/profile`,
      {
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        national_code: data.nationalCode,
      },
    );
    return messages[code];
  }
}
