export const Event = {
  WILD_CARD: '*',
  USER_NEXT_STEP: 'USER_NEXT_STEP',
  USER_PREV_STEP: 'USER_PREV_STEP',
  ERROR: 'ERROR',
  STATE_ACTION_STATUS: 'STATE_ACTION_STATUS',
} as const;

export const Action = {
  USER_NEXT_STEP: 'USER_NEXT_STEP',
  USER_PREV_STEP: 'USER_PREV_STEP',
  ERROR: 'ERROR',
} as const;

export const Error = {
  ERROR: 'ERROR',
  HTTP_ERROR: 'HTTP_ERROR',
} as const;

export const Errors = [Error.ERROR, Error.HTTP_ERROR] as const;
