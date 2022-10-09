import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataGridData } from './interfaces/datagrid.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreApiService {
  apiUrl = 'https://api.coinlore.net/api/tickers/';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<GetDataGridData>(this.apiUrl).pipe(
      map((response) => {
        let mapToNumber;
        let data = response.data;
        mapToNumber = data.map((rowTabele, idx) => {
          if (idx < 3) {
            rowTabele.percent_change_24h = 0.5;
          } else if (idx < 6) {
            rowTabele.percent_change_24h = 0.1;
          } else if (idx < 9) {
            rowTabele.percent_change_24h = 0.15;
          } else {
            rowTabele.percent_change_24h = 0.25;
          }
          return {
            ...rowTabele,
            price_usd: +rowTabele.price_usd,
            percent_change_24h: +rowTabele.percent_change_24h,
            percent_change_1h: +rowTabele.percent_change_1h,
            percent_change_7d: +rowTabele.percent_change_7d,
            price_btc: +rowTabele.price_btc,
            market_cap_usd: +rowTabele.market_cap_usd,
            id: +rowTabele.id,
            volume24: rowTabele.volume24,
            volume24a: +rowTabele.volume24a,
            csupply: +rowTabele.csupply,
            tsupply: +rowTabele.tsupply,
            msupply: +rowTabele.msupply,
          };
        });
        return mapToNumber;
      })
    );
  }
}
