export interface Icurr {
    success: boolean,
    symbols: any,
};

export interface Iitem {
    success: boolean,
    timestamp: Date,
    base: string,
    date: string,
    rates: object
}