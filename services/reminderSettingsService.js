/* eslint-disable class-methods-use-this */
import requests from "./httpService";

class ReminderSettingsService {
  getReminderSettings() {
    return requests.get('/review-request');
  }

  updateReviewReminderEmail(data) {
    return requests.post('/review-reminder/email', data);
  }

  updateReviewReminderSms(data) {
    return requests.post('/review-reminder/sms', data);
  }

  updateFollowUpReviewRequestEmail(data) {
    return requests.post('/follow-up/email', data);
  }

  updateFollowUpReviewRequestSms(data) {
    return requests.post('/follow-up/sms', data);
  }

  updateRequestForPhotoVideoReviewEmail(data) {
    return requests.post('/request-review/email', data);
  }

  updateRequestForPhotoVideoReviewSms(data) {
    return requests.post('/request-review/sms', data);
  }

  updateReplyToReviewRequestEmail(data) {
    return requests.post('/reply-review/email', data);
  }

  updateReplyToReviewRequestSms(data) {
    return requests.post('/reply-review/sms', data);
  }

  updateUnsubscribeEmail(data) {
    return requests.post('/unsubscribe', data);
  }
}

export default new ReminderSettingsService();
