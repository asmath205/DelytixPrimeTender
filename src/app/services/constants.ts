import {environment} from '../../environments/environment';

export const API_ENDPOINT_URL = environment.BASE_URL;

export const API = {
  getExtShipmentData: API_ENDPOINT_URL + 'extNotes/getShipmentData',
  LGE: API_ENDPOINT_URL + 'eventsShortNameApi/LGE'
};
