const local = {
  env: "LOCAL",
  api: {
    base_url: "http://localhost:8080/api/v1",
  },
  site_base_url: "http://localhost:3000",
  // byPassSecurity: true,
  // byPassPages: ['BlockAgent'],
  // byMenuSecurity: true,
};

const config = local;

export default {
  ...config
};
