import { LoginMainArgs, LoginRendererArgs } from './api/LoginArgs';

/**
 * 从Renderer发送的args
 */
export interface IpcRendererApiArgs extends LoginRendererArgs {}

/**
 * 从Main发送的args
 */
export interface IpcMainApiArgs extends LoginMainArgs {}
