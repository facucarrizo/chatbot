import { UserData } from '../../types';
import { SheetsService } from '../googleSheets/sheetsService';

export class LeadService {
    private sheetsService: SheetsService;

    constructor() {
        this.sheetsService = new SheetsService();
    }

    public collectUserData(data: UserData): void {
        // Logic to collect user data
        console.log('Collecting user data:', data);
    }

    public detectLead(userData: UserData): boolean {
        // Logic to detect leads based on predefined criteria
        const isLead = this.evaluateLeadCriteria(userData);
        if (isLead) {
            console.log('Lead detected:', userData);
        }
        return isLead;
    }

    private evaluateLeadCriteria(userData: UserData): boolean {
        // Placeholder for lead detection logic
        // For example, check if the user has provided a phone number and service of interest
        return !!userData.phone && !!userData.serviceOfInterest;
    }
}