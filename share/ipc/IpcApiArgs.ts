import {
    Auth2CookieMainArgs,
    Auth2CookieRendererArgs,
} from './api/Auth2cookieArgs';
import {
    FetchAccountInfoMainArgs,
    FetchAccountInfoRendererArgs,
} from './api/FetchAccountInfoArgs';
import { LoginMainArgs, LoginRendererArgs } from './api/LoginArgs';

/**
 * 从Renderer发送的args
 */
export type IpcRendererApiArgs =
    | LoginRendererArgs
    | Auth2CookieRendererArgs
    | FetchAccountInfoRendererArgs;

/**
 * 从Main发送的args
 */
export type IpcMainApiArgs =
    | LoginMainArgs
    | Auth2CookieMainArgs
    | FetchAccountInfoMainArgs;
