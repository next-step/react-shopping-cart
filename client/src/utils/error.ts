export class FetchError extends Error {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(message: string) {
    super(message);
  }
}
export const reportError = (error: unknown) => {
  if (error instanceof FetchError) {
    alert(error.message + 'Fetch Error!!');
  }
};
