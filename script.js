import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://163.158.88.17');
  sleep(1);
}

