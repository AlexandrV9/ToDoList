export type RequestResponse<Data = unknown> = {
  data?: Data | null;
  success: boolean;
  message?: string | null;
};
