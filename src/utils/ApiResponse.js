class ApiResponse {
    constructor(statusCode, data, message = "Sucess"){
        this.statusCode = statusCode
        this.data= data
        this.sucess = statusCode<400
    }
}