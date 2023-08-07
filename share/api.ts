export interface AccountInfo {
    id: number;
    cmid: number;
    displayname: string;
    wearingSkins: {
        head: string;
        hips: string;
        leftFoot: string;
        leftHand: string;
        leftLowerArm: string;
        leftLowerLeg: string;
        leftShoulder: string;
        leftUpperArm: string;
        leftUpperLeg: string;
        neck: string;
        rightFoot: string;
        rightHand: string;
        rightLowerArm: string;
        rightLowerLeg: string;
        rightShoulder: string;
        rightUpperArm: string;
        rightUpperLeg: string;
        torso: string;
    };
    permission: number;
    createdAt: string;
    updatedAt: string;
    birthday: string;
    avatar: string;
    avatarHash: string;
    status: number;
    blocklist: string[];
    gender: number;
    username: string;
    phone: string;
    email: string;
    language: string;
    description: string;
    avatarStatus: number;
    firstLogin: false;
    reputation: number;
    authInfo: number;
    flags: number;
    mutedTill: string;
    bannedTill: string;
    banEditor: false;
    gold: number;
    tag: number;
    token: string;
    isSetPassword: true;
    hasAuthenticateIdcard: true;
}

export enum PlayType {
    Map = 1,
    Model = 2,
    Music = 3,
}

export type PlayListInfo =
    | {
          contentId: number;
          viewCount: number;
          commentCount: number;
          playCount: number;
          type: PlayType.Map;
          name: string;
          image: string;
          playContainerName: string;
          authorId: number;
          authorName: string;
          authorAvatar: string;
      }
    | {
          contentId: number;
          viewCount: number;
          commentCount: number;
          playCount: number;
          type: PlayType.Model | PlayType.Music;
          name: string;
          image: string;
          authorId: number;
          authorName: string;
          authorAvatar: string;
      };

export interface LoginBack {
    error: boolean;
    data?: AccountInfo;
}

export type Auth2CookieBack = boolean;

export interface FetchAccountInfoBack {
    error: boolean;
    data?: AccountInfo;
}

export interface PlayListBack {
    count: number;
    rows: PlayListInfo[];
    extra: null;
}
