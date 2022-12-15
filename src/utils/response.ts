class ResponseHandler {
  statusCode: number;
  responseMessage: string;
  data: any;

  constructor(statusCode: number = 200, responseMessage: string = '', data?) {
    this.statusCode = statusCode;
    this.responseMessage = responseMessage;
    this.data = data;
  }

  setStatusCode(statusCode: number) {
    this.statusCode = statusCode;
  }

  setMessage(message = '') {
    this.responseMessage = message;
  }

  setData(data = {}) {
    this.data = data;
  }

  buildResponse() {
    return this;
  }
}

export default ResponseHandler;
