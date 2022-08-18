// Error: 'HttpStatus' is already declared in the upper scope on line 3 column
// eslint-disable-next-line
enum HttpStatus {
  OK = 200,
  ADDED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ALLOWED = 405,
  CONFLICT = 409,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_ERROR = 500,
  NOT_IMPLEMENTED = 501,
}

export default HttpStatus;
