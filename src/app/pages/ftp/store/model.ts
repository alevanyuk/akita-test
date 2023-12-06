import { FtpSettings } from "../api/ftp-settings.models";

export interface FtpSettingsState extends FtpSettings {
  loading: boolean;
  error: Error | null;
}
