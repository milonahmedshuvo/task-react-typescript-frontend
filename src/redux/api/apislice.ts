import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl: "https://reqres.in/api"}),
    endpoints: ( builder ) => ({
        getuserslist: builder.query({
            query: () => "/users?page=2"
        })
    })
})

export const { useGetuserslistQuery } = api