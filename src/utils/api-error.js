class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.error=this.error

        if(stack){
            this.stack=this.stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}