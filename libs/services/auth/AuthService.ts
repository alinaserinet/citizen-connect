import type { HttpBridge } from '../../bridges';
import type {
  EntryRequest,
  EntryResponse,
  OtpRequest,
  OtpResponse,
  RefreshResponse,
} from './types';

export default class AuthService {
  public constructor(
    private readonly baseUrl: string,
    private readonly client: HttpBridge,
  ) {}

  public getOtp(mobile: string, abortSignal?: AbortSignal) {
    return this.client.post<OtpRequest, OtpResponse>(
      `${this.baseUrl}/otp`,
      { mobile },
      abortSignal,
    );
  }

  public entry(mobile: string, otp: string, abortSignal?: AbortSignal) {
    return this.client.post<EntryRequest, EntryResponse>(
      `${this.baseUrl}/entry`,
      {
        mobile,
        code: otp,
      },
      abortSignal,
    );
  }

  public refresh(abortSignal?: AbortSignal) {
    return this.client.get<RefreshResponse>(
      `${this.baseUrl}/refresh`,
      abortSignal,
    );
  }
}
