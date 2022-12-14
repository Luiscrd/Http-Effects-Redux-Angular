// Generated by https://quicktype.io

import { User } from "./user.interface";

export interface RespAPI {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        User[];
  support:     Support;
}

export interface Support {
  url:  string;
  text: string;
}
