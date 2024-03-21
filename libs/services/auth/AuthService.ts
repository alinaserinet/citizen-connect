export default class AuthService {
  public constructor(private readonly baseUrl: string) {}

  public getOtp(mobile: string) {
    return mobile;
  }

  public entry(mobile: string, otp: string) {
    return { mobile, otp };
  }

  public refresh(token: string) {
    return token;
  }
}
