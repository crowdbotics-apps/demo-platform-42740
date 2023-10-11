import axios from "axios"
const demoplatformAPI = axios.create({
  baseURL: "https://demo-platform-42740.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return demoplatformAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_item_list(payload) {
  return demoplatformAPI.get(`/api/v1/item/`)
}
function api_v1_item_create(payload) {
  return demoplatformAPI.post(`/api/v1/item/`, payload)
}
function api_v1_item_retrieve(payload) {
  return demoplatformAPI.get(`/api/v1/item/${payload.id}/`)
}
function api_v1_item_update(payload) {
  return demoplatformAPI.put(`/api/v1/item/${payload.id}/`, payload)
}
function api_v1_item_partial_update(payload) {
  return demoplatformAPI.patch(`/api/v1/item/${payload.id}/`, payload)
}
function api_v1_item_destroy(payload) {
  return demoplatformAPI.delete(`/api/v1/item/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return demoplatformAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return demoplatformAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return demoplatformAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return demoplatformAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return demoplatformAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return demoplatformAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return demoplatformAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return demoplatformAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return demoplatformAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return demoplatformAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return demoplatformAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return demoplatformAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return demoplatformAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_item_list,
  api_v1_item_create,
  api_v1_item_retrieve,
  api_v1_item_update,
  api_v1_item_partial_update,
  api_v1_item_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
