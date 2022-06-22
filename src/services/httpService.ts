import axios from 'axios';
import AppConsts from '../lib/appConst';
import qs from 'qs'

// const qs = require('qs');


const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 30000,
  paramsSerializer: function(params: any) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

// http.interceptors.request.use(
//   function(config) {
//     if (!!abp.auth.getToken()) {
//       config.headers.common['Authorization'] = 'Bearer ' + abp.auth.getToken();
//     }

//     config.headers.common['.AspNetCore.Culture'] = abp.utils.getCookieValue('Abp.Localization.CultureName');
//     config.headers.common['Abp.TenantId'] = abp.multiTenancy.getTenantIdCookie();

//     return config;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );

http.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (!!error.response && !!error.response.data.error && !!error.response.data.error.message && error.response.data.error.details) {
      console.error({
        title: error.response.data.error.message,
        content: error.response.data.error.details,
      });
    } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
        console.error({
        title: 'LoginFailed',
        content: error.response.data.error.message,
      });
    } else if (!error.response) {
        console.error({ content: 'UnknownError' });
    }

    setTimeout(() => {}, 1000);

    return Promise.reject(error);
  }
);

export default http;
