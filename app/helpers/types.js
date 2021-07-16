const _setObject = (id, name) => {return {id: id, name: name}}
const _findGet = (id, data) => {return data.find(e => e.id == id)}


export const WAITING_CONFIRM_ID = 1
export const WAITING_CONFIRM = 'Waiting Confirm'
export const HAS_CONFIRM_ID = 2
export const HAS_CONFIRM = 'Has Confirm'
export const STATUS_CONFIRMS = [
    _setObject(WAITING_CONFIRM_ID, WAITING_CONFIRM),
    _setObject(HAS_CONFIRM_ID, HAS_CONFIRM),
]
export const getStatusConfirm = (id) => _findGet(id, STATUS_CONFIRMS)


export const APPROVED_ID = 1
export const APPROVED = 'Approved'
export const DISAPPROVED_ID = 2
export const DISAPPROVED = 'Disapproved'
export const STATUS_APPROVAL = [
    _setObject(APPROVED_ID, APPROVED),
    _setObject(DISAPPROVED_ID, DISAPPROVED),
]
export const getApproval = (id) => _findGet(id, STATUS_APPROVAL)


export const LEVEL_ADMIN_ID = 1
export const LEVEL_ADMIN = 'Admin'
export const LEVEL_MEMBER_ID = 1
export const LEVEL_MEMBER = 'Member'
export const LEVELS = [
    _setObject(LEVEL_ADMIN_ID, LEVEL_ADMIN),
    _setObject(LEVEL_MEMBER_ID, LEVEL_MEMBER)
]
export const getLevel = (id) => _findGet(id, LEVELS)
