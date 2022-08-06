/* eslint-disable class-methods-use-this */
import requests from "./httpService";

class AllRequestEmailsService {
  getReminderSettings() {
    return requests.get('/review-request/emails');
  }
}

export default new AllRequestEmailsService();
