import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { showMessage } from "app/store/mv/messageSlice";
import { setUser } from "app/store/userSlice";
import i18next from "i18next";
const BASE_USRL = window != undefined ? window.appSettings.apiBaseUrl : "";

const bq = fetchBaseQuery({
  baseUrl: BASE_USRL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    let state = getState();
    const userState = state ? state.user : null;

    if (userState && userState.data) {
      headers.set("Authorization", `Bearer ${userState.data.access_token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async function (args, api, extraOptions) {
    const result = await bq(args, api, extraOptions);

    if (result?.data?.result) {
      return {
        data: {
          statusCode: result.data.statusCode,
          result: result.data.result,
          message: result.data.message,
          totalInfo: JSON.parse(
            result?.meta?.response?.headers?.get("X-Pagination")
          ),
        },
      };
    } else if (result?.meta?.response?.status == 200) {
      return {
        data: {
          statusCode: 200,
        },
      };
    } else if (result?.meta?.response?.status == 401) {
      api.dispatch(
        showMessage({
          message: i18next.t("UNAUTHORIZED_ERROR_MESSAGE"),
          variant: "error",
        })
      );
      setTimeout(() => {
        api.dispatch(setUser({ data: null }));
      }, 5000);
    } else if (result?.meta?.response?.status == 403) {
      api.dispatch(
        showMessage({
          message: i18next.t("FORBIDDEN_ERROR_MESSAGE"),
          variant: "error",
        })
      );
    }

    return result;
  },

  tagTypes: ["userApi"],
  endpoints: (builder) => ({}),
});

export const jsonToQueryString = function (json) {
  return (
    "?" +
    Object.keys(json)
      .map(function (key) {
        return json[key] != null && json[key] !== undefined
          ? encodeURIComponent(key) + "=" + encodeURIComponent(json[key])
          : "";
      })
      .filter((item) => item)
      .join("&")
  );
};
