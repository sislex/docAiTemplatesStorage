/** In-memory file storage mock, keyed by template id and file name. */
export class FileStorageServiceMock {
  private store = new Map<string, Map<string, Buffer>>();

  save(id: string, name: string, buf: Buffer): void {
    if (!this.store.has(id)) {
      this.store.set(id, new Map());
    }
    this.store.get(id)!.set(name, buf);
  }

  get(id: string, name: string): Buffer | undefined {
    return this.store.get(id)?.get(name);
  }

  delete(id: string): void {
    this.store.delete(id);
  }

  has(id: string): boolean {
    return this.store.has(id);
  }

  clear(): void {
    this.store.clear();
  }

  listIds(): string[] {
    return [...this.store.keys()];
  }
}
