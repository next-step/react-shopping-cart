export class Repository<T> {
  constructor(
    private readonly key: string,
    private readonly initialItems: T[] = [],
    private readonly repository: Storage = localStorage
  ) {
    const items = this.get();

    if (!items.length) {
      this.set(this.initialItems);
    }
  }

  public get(): T[] {
    return JSON.parse(this.repository.getItem(this.key) || '[]');
  }

  public set(item: T[]): void {
    this.repository.setItem(this.key, JSON.stringify(item));
  }

  public remove(): void {
    this.repository.removeItem(this.key);
  }
}
