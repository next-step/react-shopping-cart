import { IResponseError } from "../domain/types/response";
import { IViewError } from "./types";

function parseStatusCode(message?: string): number {
  if (!message) return Number.MIN_SAFE_INTEGER;

  const PREFIX_MESSAGE = "Request failed with status code";
  const REGEX_DIGIT = /\d+/;

  const rawStatusCode = message.split(PREFIX_MESSAGE)?.[1];
  if (rawStatusCode) {
    const code = rawStatusCode.match(REGEX_DIGIT)?.[0] ?? Number.MIN_SAFE_INTEGER.toString();
    return parseInt(code, 10);
  }
  return Number.MIN_SAFE_INTEGER;
}

function parseMessage(status: number): string {
  const type = Math.floor(status / 100);
  switch (type) {
    case 4:
      return "올바르지 않은 방법으로 요청했습니다. 다시 시도해 주세요";
    case 5:
      return "서버에서 작업을 처리하는 도중 오류가 발생했습니다.";
    default:
      return "알 수 없는 오류입니다.";
  }
}

export function convertToViewError(error: IResponseError): IViewError {
  if (error?.response?.data?.customMessage) {
    return { message: error.response.data.customMessage };
  }

  const status = parseStatusCode(error?.message);
  const message = parseMessage(status);
  return { title: "에러 테스트", message };
}
