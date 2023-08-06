import { AccountInfo, LoginBack } from '../../share/api';
import { service } from './service';

export async function login(
    account: string,
    password: string,
): Promise<LoginBack> {
    var { data } = await service.post('https://backend.box3.fun/auth/login', {
        account,
        password,
    });
    var loginBack: LoginBack = {
        error: false,
        data: 0,
    };
    if (data.code == 10001000) loginBack.error = true;
    if (data.code == 200) loginBack.data = data.data;
    return loginBack;
}

export async function auth2cookie(token: string): Promise<boolean> {
    var { data } = await service.post(
        'https://box3.codemao.cn/api/api/auth-server-rpc',
        {
            type: 'authToCookie',
            data: token,
        },
    );
    return data.type == 'success';
}

export async function fetchAccountInfo(
    id: string,
): Promise<AccountInfo | false> {
    var { data } = await service.post(
        'https://box3.codemao.cn/api/api/user-server-rpc',
        {
            type: 'get',
            data: {
                publishedContentsCount: false,
                condition: 'id',
                value: id,
            },
        },
    );
    if (data.type == 'error') return false;
    return data.data.data;
}
