export interface UserData {
    name: string;
    phone: string;
    serviceOfInterest: string;
}

export interface Lead {
    userData: UserData;
    timestamp: Date;
    status: 'new' | 'contacted' | 'converted';
}