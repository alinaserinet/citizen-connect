import type { HttpClient } from '../../bridges';

export default class UserService {
  public constructor(
    private readonly baseUrl: string,
    private readonly client: HttpClient,
  ) {
    this.getProfile = this.getProfile.bind(this);
  }

  public getProfile(abortSignal?: AbortSignal) {
    return this.client.get(`/user/profile`, abortSignal);
  }

  public updateProfile(data: any) {
    return data;
  }
}
