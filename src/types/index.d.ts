declare namespace Application {
  const enum ServerStatusName {
    SUCCESS = "success",
    ERROR = "error",
  }

  const enum ServerStatus {
    Success,
    Error,
  }

  interface ServerResponse<D> {
    data: D;
    status: number;
  }
}
