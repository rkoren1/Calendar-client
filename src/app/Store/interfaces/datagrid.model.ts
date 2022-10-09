export interface OblikaPodatkov extends Record<string, any>{
  id: number;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: number;
  percent_change_24h: number;
  percent_change_1h: number;
  percent_change_7d: number;
  price_btc: number;
  market_cap_usd: number;
  volume24: number;
  volume24a: number;
  csupply: number;
  tsupply: number;
  msupply: number;
}

export interface GetDataGridData
{
  data:OblikaPodatkov[];
  info: any;
}
