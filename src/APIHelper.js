import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      const message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  };

  /** Get all companies with optional filer on company name */

  static async getCompanies(name) {
    const data = name ? {name: name} : {};
    const res = await this.request('/companies', data);
    return res.companies;
  };

  /** Get all jobs with optional filer on job title */

  static async getJobs(title) {
    const data = title ? {title: title} : {};
    const res = await this.request('/jobs', data);
    return res.jobs;
  };

  /** Get current user info */

  static async getCurrentUser(username) {
    const res = await this.request(`/users/${username}`);
    return res.user;
  }

  /** Login a user */

  static async getLoginToken(data) {
    const res = await this.request('/auth/token', data, "POST");
    return res.token;
  };

  /** Signup a new user */

  static async getNewUserToken(data) {
    const res = await this.request('/auth/register', data, 'POST');
    return res.token;
  };

  /** Update user profile info */

  static async updateUser(username, data) {
    const res = await this.request(`/users/${username}`, data, "PATCH");
    return res.user;
  }
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
