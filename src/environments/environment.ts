import { api } from "./api";

export const environment = {
    api: {
      baseUrlAPI: '/api/v1',
      baseUrl: window.location.protocol,
      ...api,
    }
  };