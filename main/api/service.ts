import axios from 'axios';

import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

const jar = new CookieJar();

export let service = wrapper(
    axios.create({
        withCredentials: true,
        jar,
        baseURL: 'https://backend.box3.fun',
    }),
);
