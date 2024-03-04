export interface Session {
    success: boolean;
    data: SessionUser;
    user?: SessionUser;
    message: string;
};

export interface SessionUser {
    name: string;
    email: string;
    sub: string;
    id: string;
    phone: string;
    _token: string;
    token: string;
    permissions: any;
    iat: number;
    exp: number;
    jti: number;
};