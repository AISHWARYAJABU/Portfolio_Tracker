export class store {
    private data: { [key: string]: number };
  
    constructor() {
      this.data = {
        'AAPL':192.46,
        'MSFT':337.99,
        'ACN':310.97,
        'JEPI':55,
        'FNCL':47.39,
        'NGRRF':87.8,
        'BACRP':209,
        'BK':45.07,
        'PAAS':14.82,
        'PINS':27.24,
        'TSLA':279.82,
        'AMZN':130.22,
        'NVDA':424.13,
        'META':286.02,
        'GOOGL':119.9,
        'ORCL':117.95
      };
    }
  
    setValue(key: string, value: number): void {
      this.data[key] = value;
    }
  
    getValue(key: string): number | undefined {
      return this.data[key];
    }
  
    getAllKeys(): string[] {
      return Object.keys(this.data);
    }
  
    getAllValues(): number[] {
      return Object.values(this.data);
    }
  
    deleteValue(key: string): void {
      delete this.data[key];
    }
  }
  