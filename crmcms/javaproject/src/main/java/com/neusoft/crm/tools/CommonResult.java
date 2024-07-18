package com.neusoft.crm.tools;

public class CommonResult<T> {

    private T result;

    private String message;

    private Integer statusCode;

    public CommonResult(T result){
        this.result=result;
        this.message="OK";
        this.statusCode=200;
    }

    public CommonResult(T result,Integer statusCode){
        this.result=result;
        this.message="OK";
        this.statusCode=statusCode;
    }

    public T getResult() {
        return result;
    }

    public void setResult(T result) {
        this.result = result;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
    }

    @Override
    public String toString() {
        return "CommonResult{" +
                "result=" + result +
                ", message='" + message + '\'' +
                ", statusCode=" + statusCode +
                '}';
    }
}
