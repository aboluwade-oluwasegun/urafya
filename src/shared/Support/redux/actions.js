export const FETCHING_SUPPORT_GROUPS = "FETCHING_SUPPORT_GROUPS";
export const FETCHING_SUPPORT_GROUPS_SUCCESS =
  "FETCHING_SUPPORT_GROUPS_SUCCESS";
export const FETCHING_SUPPORT_GROUPS_FAILURE =
  "FETCHING_SUPPORT_GROUPS_FAILURE";
export const FETCH_SUPPORT_GROUPS = "FETCH_SUPPORT_GROUPS";
export const DELETE_SUPPORT_GROUP = "DELETE_SUPPORT_GROUP";
export const SUPPORT_GROUP_DELETED = "SUPPORT_GROUP_DELETED";
export const DELETE_FAILED = "DELETE_FAILED";
export const CREATE_SUPPORT_GROUP = "CREATE_SUPPORT_GROUP";
export const CREATE_SUPPORT_GROUP_SUCCESS = "CREATE_SUPPORT_GROUP_SUCCESS";
export const CREATE_SUPPORT_GROUP_FAILURE = "CREATE_SUPPORT_GROUP_FAILURE";
export const CREATING_SUPPORT_GROUP = "CREATING_SUPPORT_GROUP";
export const FETCH_SUPPORT_GROUP = "FETCH_SUPPORT_GROUP";
export const FETCHING_SUPPORT_GROUP = "FETCHING_SUPPORT_GROUP";
export const FETCHING_SUPPORT_GROUP_SUCCESS =
  "FETCHING_SUPPORT_GROUP_SUCCESS";
export const FETCHING_SUPPORT_GROUP_FAILURE =
  "FETCHING_SUPPORT_GROUP_FAILURE";
export const FETCHING_MESSAGES = "FETCHING_MESSAGES"
export const FETCHING_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS"
export const FETCHING_MESSAGES_FAILURE = "FETCHING_MESSAGES_FAILURE"
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const FETCHING_ALL_GROUPS_SUCCESS = "FETCHING_ALL_GROUPS_SUCCESS"
export const SUBSCRIBE_TO_GROUP = "SUBSCRIBE_TO_GROUP"


export const fetchGroups = () => ({
  type: FETCH_SUPPORT_GROUPS,
});

export const deleteSupportGroup = (id) => ({
  type: DELETE_SUPPORT_GROUP,
  payload: id,
});

export const createSupportGroup = (payload) => ({
  type: CREATE_SUPPORT_GROUP,
  payload,
});

export const fetchGroup = (payload) => ({
  type: FETCH_SUPPORT_GROUP,
  payload
})

export const addMessage = (payload) => ({
  type: ADD_MESSAGE,
  payload
})

export const subscribeToGroup = (payload) => ({
  type: SUBSCRIBE_TO_GROUP,
  payload
})