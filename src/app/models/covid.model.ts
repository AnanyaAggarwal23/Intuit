import { GlobalSummary } from './global.model';
import { CountryData } from './country.model';
export interface CovidData {
  Countries: CountryData[];
  Date: string;
  Global: GlobalSummary[];
  ID: string;
  Message: string;
}
