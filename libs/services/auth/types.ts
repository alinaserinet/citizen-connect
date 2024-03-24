export interface EntryRequest {
  mobile: string;
  code: string;
}

export interface EntryResponse {
  access_token: string;
  refresh_token: string;
  message_code: number;
}

export interface OtpRequest {
  mobile: string;
}

export interface OtpResponse {
  message_code: number;
  mobile: string;
  expire_unix: number;
}

export interface RefreshResponse {
  access_token: string;
  refresh_token: string;
  message_code: number;
}
