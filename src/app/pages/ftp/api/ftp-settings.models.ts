export interface FtpSettings {
  address: string;
  port?: number; // wtf
  login?: string;
  password?: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface FtpAddress {
  address: string;
  port?: string; // wtf
}
