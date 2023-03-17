export class Repository<T> {
  constructor(
    private readonly key: string,
    private readonly repository: Storage = localStorage
  ) {
  }

  public get(): T[] {
    return JSON.parse(this.repository.getItem(this.key) || '[]');
  }

  public set(item: T | T[]): void {
    this.repository.setItem(this.key, JSON.stringify(item));
  }

  public remove(): void {
    this.repository.removeItem(this.key);
  }
}
