export class ErrorResponse {
  messageCode: string;
  code: number;
  errorCode?: string

  constructor(message: string, code: number, errorCode?: string) {
    this.messageCode = message;
    this.code = code;
    this.errorCode = errorCode;
  }
}