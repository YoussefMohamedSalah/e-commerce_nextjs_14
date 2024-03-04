export interface LoginTerms {
    email: string;
    password: string;
};

export interface SignupTerms {
    name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
    locale?: string;
};

export interface ActivateUserTerms {
    email: string;
    token: string;
};

export interface ResendActivationCodeTerms {
    email: string;
};

export interface RequestTokenTerms {
    email: string;
};

export interface UpdatePasswordTerms {
    email: string;
    token: string;
    password: string;
    password_confirmation: string;
};

export interface ValidateTokenTerms {
    email: string;
    otp: string;
};