export type StaticPayload = {
	status: number;
	meta: SimpleObject;
	response: LastVehicleData[];
};

export type SearchData = {
	key: string;
	payload: StaticPayload;
};

export type RealTimePayload = {
	status: number;
	meta: SimpleObject;
	response: RealVehicleData[];
};

export type EventInfo = {
	type: string;
	payload: RealTimePayload | StaticPayload;
};

export type SimpleObject = { [key: string]: string };

export type LastVehicleData = {
	objectId: number;
	orgId: number;
	timestamp: string;
	latitude: number;
	longitude: number;
	speed: number | null;
	enginestate: number;
	gpsstate: boolean;
	direction: number | null;
	fuel: number | null;
	power: number;
	CANDistance: number | null;
	available: string | null;
	driverId: number | null;
	driverName: string | null;
	driverKey: string | null;
	driverPhone: string | null;
	driverStatuses: Array<number> | null;
	driverIsOnDuty: boolean | null;
	dutyTags: Array<string> | null;
	pairedObjectId: number | null;
	pairedObjectName: string | null;
	lastEngineOnTime: string;
	inPrivateZone: boolean;
	offWorkSchedule: boolean | null;
	tripPurposeDinSet: number | null;
	tcoData: string | null;
	tcoCardIsPresent: boolean;
	address: string;
	addressArea: boolean;
	addressAreaId: number | null;
	displayColor: string | null;
	employeeId: string | null;
	currentOdometer: number | null;
	currentWorkhours: number | null;
	enforcePrivacyFilter: boolean | null;
	EVStateOfCharge: string | null;
	EVDistanceRemaining: number | null;
	customValues: Array<string>;
	EventType: string;
	objectName: string;
	externalId: number | null;
	plate: string;
};

export type RealVehicleData = {
	timestamp: string;
	ServerGenerated: string | null;
	Din1: number | null;
	SplitSegment: string | null;
	EventType_dec: string;
	Distance: number;
	Power: number;
	EngineStatus: string | null;
	Direction: number;
	Longitude: number;
	Latitude: number;
	GPSState: string;
	DriverId: number | null;
	Speed: number | null;
};
