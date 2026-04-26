/** Preset-based HTTP API mock for frontend tests. */
export class HttpApiMock {
  private responses = new Map<string, unknown>();

  setResponse(path: string, response: unknown): void {
    this.responses.set(path, response);
  }

  getResponse(path: string): unknown {
    return this.responses.get(path);
  }

  clear(): void {
    this.responses.clear();
  }
}
