export class ApiError extends Error {
  status: number;
  response: Response;

  constructor(message: string, status: number, response: Response) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.response = response;
  }
}

export async function validateResponse(response: Response): Promise<Response> {
  if (!response.ok) {
    throw new ApiError(
      response.statusText || 'ApiError',
      response.status,
      response
    )
  }

  return response;
}