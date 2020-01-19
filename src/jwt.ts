export class AuthDetails {
    username: string = null;
    role: string = "guest";
    token: string = null;
    id: string = null;
}

export class AuthResponse {
    status: string;
    details: AuthDetails;
}