declare namespace Domain {
	interface UserInfo {
		id: number;
		username: string;
		firstName: string;
		lastName: string;
		email: string;
		provider: string;
		confirmed: boolean;
		blocked: boolean;
		createdAt: string;
		updatedAt: string;
	}

	interface User {
		jwt: string;
		info: UserInfo;
	}

	interface PollOption {
		title: string;
		selected: boolean;
	}

	interface Poll {
		id: string;
		title: string;
		options: Array<PollOption>;
		expiresAt: string;
		startsAt: string;
	}
}
