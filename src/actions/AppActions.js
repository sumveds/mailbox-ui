import { LOAD_EMAILS, ACTIVE_SECTION, SECTIONS} from '../Constants';

function loadEmails(data) {
  return {
    type: LOAD_EMAILS,
    emails: data
  };
}

export function setActiveSection(section) {
  return {
    type: ACTIVE_SECTION,
    section
  };
}

export function fetchMails(mailType = SECTIONS[0]) {
  return function (dispatch) {
    const data = {
        results: [{
          id: 1,
          from: {
            email: "abc@xyz.com",
            name: "John Nash"
          },
          subject: "Regarding leave",
          sentAt: 1526366547000
        },{
          id: 2,
          from: {
            email: "abc@xyz.com",
            name: "John Nash"
          },
          subject: "Regarding leave",
          sentAt: 1526366547000
        },{
          id: 3,
          from: {
            email: "abc@xyz.com",
            name: "John Nash"
          },
          subject: "Regarding leave",
          sentAt: 1526366547000
        },{
          id: 4,
          from: {
            email: "abc@xyz.com",
            name: "John Nash"
          },
          subject: "Regarding leave",
          sentAt: 1526366547000
        }
      ]
    };
    dispatch(loadEmails(data.results));
    dispatch(setActiveSection(mailType));
    /*fetch('')
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
          dispatch(loadEmails(data.results));
          dispatch(setActiveSection(mailType));
      });*/
    };
}

