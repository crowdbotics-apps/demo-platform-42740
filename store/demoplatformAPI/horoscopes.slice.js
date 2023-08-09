import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_horoscope_list = createAsyncThunk(
  "horoscopes/api_v1_horoscope_list",
  async payload => {
    const response = await apiService.api_v1_horoscope_list(payload)
    return response.data
  }
)
export const api_v1_horoscope_create = createAsyncThunk(
  "horoscopes/api_v1_horoscope_create",
  async payload => {
    const response = await apiService.api_v1_horoscope_create(payload)
    return response.data
  }
)
export const api_v1_horoscope_retrieve = createAsyncThunk(
  "horoscopes/api_v1_horoscope_retrieve",
  async payload => {
    const response = await apiService.api_v1_horoscope_retrieve(payload)
    return response.data
  }
)
export const api_v1_horoscope_update = createAsyncThunk(
  "horoscopes/api_v1_horoscope_update",
  async payload => {
    const response = await apiService.api_v1_horoscope_update(payload)
    return response.data
  }
)
export const api_v1_horoscope_partial_update = createAsyncThunk(
  "horoscopes/api_v1_horoscope_partial_update",
  async payload => {
    const response = await apiService.api_v1_horoscope_partial_update(payload)
    return response.data
  }
)
export const api_v1_horoscope_destroy = createAsyncThunk(
  "horoscopes/api_v1_horoscope_destroy",
  async payload => {
    const response = await apiService.api_v1_horoscope_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const horoscopesSlice = createSlice({
  name: "horoscopes",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_horoscope_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_horoscope_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_horoscope_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_horoscope_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_horoscope_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_horoscope_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_horoscope_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_horoscope_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_horoscope_list,
  api_v1_horoscope_create,
  api_v1_horoscope_retrieve,
  api_v1_horoscope_update,
  api_v1_horoscope_partial_update,
  api_v1_horoscope_destroy,
  slice: horoscopesSlice
}
