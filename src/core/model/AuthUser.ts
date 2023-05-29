export interface AuthUser{
    /** 用户名 */
    userName:string;
    /** 用户密码 */
    passowrd:string
    /** 应用登录授权ID */
    appId?:number;
}